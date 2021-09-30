import React from "react";
import "./styles.css";
import { useState } from "react";
document.body.classList.add("background-red");

const bookDB = {
  Javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "This book is pure art for the beginner and intermediate JavaScript developers"
    },
    {
      name: "You Don’t Know JS by Kyle Simpson",
      rating: "⭐⭐⭐⭐",
      Description:
        "You don’t know JS” is not a single book; it is a series of 6 books that are well written and well organized for learning JavaScript."
    },
    {
      name: "A Smarter Way to Learn JavaScript by Mark Myers",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "Suppose you are new to the programming language and have no prior knowledge of the JavaScript language. In that case, this is the book for you."
    }
  ],

  Indian_History: [
    {
      name: "Freedom at Midnight by Dominique Lapierre and Larry Collins",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "This book focuses on India’s independence movement during 1946 and 1948. The series of events that unfold during this period are worthy of this book being classified as a historical one."
    },
    {
      name: "The Argumentative Indian by Amartya Sen",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "This book majoraly tells India’s history and how that history has influenced and shaped its cultural identity"
    },
    {
      name: " India after Gandhi: The History of the World’s Largest Democracy",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "This book of Ramachandra Guha talks about India’s history after it gained independence from the British. This is the perfect book for you to understand the evolution of Modern India"
    }
  ],
  Classic_Novels: [
    {
      name: "1984 by George Orwell",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "Stylish English horror.Deals with themes like morality and beauty"
    },
    {
      name: "The Lord of the Rings by J.R.R. Tolkien",
      rating: "⭐⭐⭐⭐",
      Description:
        "Tolkien’s fantasy epic is one of the top must-read books out there"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Javascript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Good Books</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout some good books here. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            className="button"
            style={{ color: "white" }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="show-list" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li className="rec" key={book.name}>
              {" "}
              <div style={{ fontSize: "larger", color: "white" }}>
                {" "}
                {book.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.5rem 0rem" }}>
                {" "}
                {book.rating}{" "}
              </div>
              <div> {book.Description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

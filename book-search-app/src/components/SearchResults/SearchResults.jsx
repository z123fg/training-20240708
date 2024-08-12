import React from "react";
import BookCard from "./BookCard";
import "./SearchResults.css";

export default function SearchResults({ books, onAdd, isLoading }) {
  console.log(books);
  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <ul>
      {books?.map((book) => (
        <BookCard book={book} onAdd={onAdd} key={book.id} />
      ))}
    </ul>
  );
}

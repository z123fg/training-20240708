import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Wishlist from "./components/Wishlist/Wishlist";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleSearch = async (query) => {
    if (query.trim()) {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
      );
      const data = await response.json();
      setBooks(data.items);
    }
  };

  const handleAddToWishlist = (book) => {
    const result = wishlist.find((item) => {
      return item.id === book.id;
    });
    if (result === undefined) {
      setWishlist([book, ...wishlist]);
    }
  };

  const handleDeleteBook = (id) => {
    console.log(wishlist);
    const newWishlist = wishlist.filter((book) => book.id !== id);
    setWishlist(newWishlist);
  };

  return (
    <div className="App">
      <div>
        <SearchBar onSubmit={handleSearch} />
        <SearchResults books={books} onAdd={handleAddToWishlist} />
      </div>
      <div>
        <Wishlist wishlist={wishlist} onDelete={handleDeleteBook} />
      </div>
    </div>
  );
}

export default App;

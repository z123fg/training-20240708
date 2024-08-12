import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Wishlist from "./components/Wishlist/Wishlist";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      if (query.trim()) {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
        );
        const data = await response.json();
        setBooks(data.items);
      }
    } catch (err) {
      console.log("error:", err);
    } finally {
      setIsLoading(false);
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
        <SearchBar
          onSubmit={handleSearch}
          books={books}
          setSelectedBook={setSelectedBook}
        />
        <SearchResults
          books={selectedBook ? [selectedBook] : undefined}
          onAdd={handleAddToWishlist}
          isLoading={isLoading}
        />
      </div>
      <div>
        <Wishlist wishlist={wishlist} onDelete={handleDeleteBook} />
      </div>
    </div>
  );
}

export default App;

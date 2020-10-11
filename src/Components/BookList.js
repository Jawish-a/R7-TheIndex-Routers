import React, { useState } from "react";
// import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import SearchBar from "../SearchBar";
import { useParams } from "react-router-dom";


const BookList = ({ books }) => {

    const [query, setQuery] = useState("");
    const { bookColor } = useParams()
    const filteredBooks = books.filter(book => {
        if (bookColor) {
            return book.color === bookColor;
        } else {
            return `${book.title}`
                .toLowerCase()
                .includes(query.toLowerCase())
        }
    }
    );

    const bookCards = filteredBooks.map(book => (
        <BookCard key={book.id} book={book} />
    ));

    return (
        <div>
            <SearchBar handleFilter={setQuery} />

            <h3>List of all books</h3>
            <div className="row">{bookCards}</div>

        </div>
    );
};

export default BookList;

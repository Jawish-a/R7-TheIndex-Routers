import React from "react";
import { Link } from "react-router-dom";

const AuthorCard = props => {
    const book = props.book;
    //   const authorName = `${author.first_name} ${author.last_name}`;
    const authors = book.authors.map( (author) => (<Link to={`author/${author.id}`}>{author.name}</Link>) );
    

    return (
        <div className="col-lg-4 col-md-6 col-12 border border-info">
            <div className="card-body">
                <h5 className="card-title">
                    <span>{book.title}</span>
                </h5>
                <p>{book.color}</p>
                { book.available === "true" ?
                    <p>is available: YES</p>:
                    <p>is available: NO</p>

                }
                <p>Authers: {authors}</p>
            </div>
        </div>
    );
};

export default AuthorCard;

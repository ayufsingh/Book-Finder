import React from "react";

export default function BookList({ books }) {
  if (!books) return null;
  if (books.length === 0)
    return <p className="empty-state">No books found. Try another title.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.key} className="book-card">
          <img
            src={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : "https://via.placeholder.com/150x200?text=No+Cover"
            }
            alt={book.title}
          />
          <h4>{book.title}</h4>
          <p>{book.author_name?.join(", ")}</p>
          <p>{book.first_publish_year}</p>
        </div>
      ))}
    </div>
  );
}

import React from 'react'
import './Cards.css';

function Cards({ bookArray }) {
    return (
        <div className='container'>
            <div className='row row-cols-3'>
                {bookArray ? (
                    bookArray.map(book => (
                        <div className='col'>
                            <div className="card" key={book.id}>
                                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                                    <a target="_blank" href={book.volumeInfo.previewLink} key={book.id}>
                                        <img className='card-img-top rounded mx-auto d-block' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    </a>
                                ) : (
                                    <img src="" className="img-fluid rounded-top" alt={book.volumeInfo.title} />
                                )}
                                <div className="card-body">
                                    <h4 className="card-title">{book.volumeInfo.title}</h4>
                                    {book.volumeInfo.authors ? (
                                        <p className="card-text">{book.volumeInfo.authors.toString()}</p>
                                     ) : (
                                        <p className="card-text">Author N/A</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No search results available</p>
                )}
            </div>
        </div>
    )
}

export default Cards;
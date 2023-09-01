import React from 'react'

function Cards({bookArray}) {
    return (
        <div>
            {bookArray ? (
                bookArray.map(book => (
                    <a target="_blank" href={book.volumeInfo.previewLink} key={book.id}>
                        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        ) : (
                            <p className='noThumbnail'>No thumbnail available</p>
                        )}
                    </a>
                ))
            ) : (
                <p>No search results available</p>
            )}
        </div>
    )
}

export default Cards;
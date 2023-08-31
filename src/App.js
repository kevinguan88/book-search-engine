import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyDpQVZESw_uIJtv4EVMTJh_VPyaiDfiNbo");

  function handleChange(event) {

    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event) {

    event.preventDefault();

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey)
      .then(result => {
        console.log(result.data.items);
        setResult(result.data.items);
      })
      .catch(error => console.log(error))

    console.log(book)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Book Search Engine</span>
        </div>
      </nav>
      <div className="container py-5">
        <h1 className="text-center text-light">Book Search Engine</h1>
        <p className="text-light">Search through the Google Books database with our sweet and simple search engine.</p>
        <form onSubmit={handleSubmit}>
          <div className="px-4 pt-4 pb-3 rounded-3 bg-info bg-gradient bg-opacity-75">
            <div className="input-group mb-3">
              <input type="text" className="form-control" onChange={handleChange} placeholder="Search Books" aria-label="Search Books" aria-describedby="button-addon2" />
              <button className="btn btn-warning" type="submit" id="button-addon2">Search</button>
            </div>
          </div>
        </form>
      </div>
      {result ? (
        result.map(book => (
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
  );
}

export default App;

import React from "react";
import { ReactDOM } from "react-dom";

function App() {
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
                <div className="px-4 pt-4 pb-3 rounded-3 bg-info bg-gradient bg-opacity-75">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Books" aria-label="Search Books" aria-describedby="button-addon2"  />
                        <button className="btn btn-warning" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
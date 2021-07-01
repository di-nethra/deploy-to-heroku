import React from "react";
import Book from "./Book";
import { BookDetails1, BookDetails2, BookDetails3 } from "./BookDetails";

function App() {
  return (
    <div>
      <h1>Book list still baking...</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center">
            <Book
              src={BookDetails1.src}
              title={BookDetails1.title}
              author={BookDetails1.author}
            />
          </div>
          <div className="col-lg-4 text-center">
            <Book
              src={BookDetails2.src}
              title={BookDetails2.title}
              author={BookDetails2.author}
            />
          </div>

          <div className="col-lg-4 text-center">
            <Book
              src={BookDetails3.src}
              title={BookDetails3.title}
              author={BookDetails3.author}
            />
          </div>
        </div>
      </div>
      <p className="copyright text-center">Copyrights © Dinethrex 2021</p>
    </div>
  );
}

export default App;

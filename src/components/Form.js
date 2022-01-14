import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
 
const unsplash = createApi({
    accessKey: 'QNaMRLF-c55QU41XHKExZcqjH9B9Yyq24CB31R5qe64',
  });

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search.getPhotos({
            query: query
        }).then(result=>{setPics(result.response.results)})
    };

    return (
        <>
        <p className="f3">{'SmartBrain will detect human faces in images. Try it for yourself!'}</p>
        <form className="form" onSubmit={searchPhotos}>
            <label className="label" htmlFor="query"> 
                {" "}
                📷
            </label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={`Try "dog" or "apple"`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="button">
                Search
            </button>
        </form>
        <div className="card-list">
        {
          pics.map((pic) =>
            <div className="card">
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
        }
      </div>
    </>
    )
}

export default SearchForm;
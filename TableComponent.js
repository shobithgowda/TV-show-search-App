// src/TableComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('Game of Thrones'); // Default search query

  const apiKey = '5PGiUZKcp6c0Ed1IFEpt6m5RJvCK6RUp'; // eslint-disable-line no-unused-vars

  useEffect(() => {
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;

    axios.get(apiUrl)
      .then(response => setShows(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>TV Shows Search Results</h2>
      <label htmlFor="searchInput">Search TV Shows:</label>
      <input type="text" id="searchInput" value={searchQuery} onChange={handleSearchChange} />
      <br />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Language</th>
            <th>Genres</th>
            <th>Official Site</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => (
            <tr key={show.show.id}>
              <td>{show.show.name}</td>
              <td>{show.show.language}</td>
              <td>{show.show.genres.join(', ')}</td>
              <td><a href={show.show.officialSite} target="_blank" rel="noopener noreferrer">{show.show.officialSite}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

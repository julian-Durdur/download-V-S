import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=YOUR_API_KEY`);
      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Rechercher</button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id.videoId}>{result.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
};
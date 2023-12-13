import React, { useState } from 'react';

const Home = () => {
  const [scopusId, setScopusId] = useState('');
  const [researchInfo, setResearchInfo] = useState(null);

  const handleSearch = async () => {
    // Assuming you have a function to fetch research information based on the Scopus ID
    try {
      const response = await fetch(`/api/research-info/${scopusId}`);
      const data = await response.json();
      setResearchInfo(data);
    } catch (error) {
      console.error('Error fetching research information:', error);
      // Handle error, show a message, etc.
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Research Information Lookup</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter Scopus ID"
          value={scopusId}
          onChange={(e) => setScopusId(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {researchInfo && (
        <div>
          <h2 className="text-xl font-bold mb-2">Research Information</h2>
          {/* Display research information here based on the data structure */}
          <p>Title: {researchInfo.title}</p>
          <p>Author: {researchInfo.author}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Home;

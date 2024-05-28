import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/web');
      const jsonData = await response.json();
      setData(jsonData);
      localStorage.setItem('webData', JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const displayData = () => {
    const storedData = localStorage.getItem('webData');
    if (storedData && data) {
      const parsedData = JSON.parse(storedData);
      return (
        <div>
          <p>{JSON.stringify(parsedData)}</p>
        </div>
      );
    } else {
      return <p>버튼을 클릭해주세요.</p>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>INU Button</button>
        {displayData()}
      </header>
    </div>
  );
}

export default App;

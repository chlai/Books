import React, { useEffect, useState } from 'react';

const HtmlFileLinks = () => {
  const [htmlFiles, setHtmlFiles] = useState([]);

  useEffect(() => {
    const fetchHtmlFiles = async () => {
      try {
        const response = await fetch('/books');
        const data = await response.json();
        setHtmlFiles(data);
      } catch (error) {
        console.error('Error fetching Books files:', error);
      }
    };

    fetchHtmlFiles();
  }, []);

  return (
    <div>
      <h1>HTML Files</h1>
      <ul>
        {htmlFiles.map((fileName, index) => (
          <li key={index}>
            <a href={`/html/${fileName}`}>{fileName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HtmlFileLinks;
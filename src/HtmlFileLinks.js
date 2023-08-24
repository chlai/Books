import React from 'react';

const HtmlFileLinks = () => {

 const fileNames =["a_401_410.html","a_411_420.html","a_421_430.html","a_431_440.html"

 ];
  return (
    <div>
      <h1>HTML Files</h1>
      <ul>
        {fileNames.map((fileName, index) => (
          <li key={index}>
            <a href={`/books/${fileName}`}>{fileName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HtmlFileLinks;
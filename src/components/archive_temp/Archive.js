import './Archieve.css';
import  { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
// import markdown files
import file from "./markdown.md";
import file2 from "./markdown2.md";

const ReactMarkdownWithHtml = require('react-markdown/with-html');


function Archieve() {
    const [markdown, setMarkdown] = useState("");
    const [markdown2, setMarkdown2] = useState("");

    useEffect(() => {
        fetch(file)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
        fetch(file2)
        .then((res)=> res.text())
        .then((text)=> setMarkdown2(text))
    }, []); 
  return (
      <div className="archieve-wrap">
      <div className="archieve">
          <ReactMarkdown source={markdown}/>
          <ReactMarkdownWithHtml children={markdown2} allowDangerousHtml />
      </div>
      </div>
  );
}

export default Archieve;

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import AppTimeline from "../components/AppTimeline";

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
    const initialMarkup = ReactDOMServer.renderToString( < AppTimeline / > );

    res.send(`
    <html>
      <head>
        <title>Sample React App</title>
        <link rel="stylesheet" href="/main.css">
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(4242, () => console.log("Server is running..."));
"use client";
import React, { useEffect, useState } from "react";
import Advanced from "./Advanced";
import { UrlPair } from "../type/type";

const isValidUrl = (string: string) => {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
};

const Hero = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [shortenList, setShortenList] = useState<UrlPair[]>([]);
  const [error, setError] = useState<boolean>(false);

  const shortenUrl = async () => {
    if (inputUrl === "" || !isValidUrl(inputUrl)) {
      setError(true);
      return;
    }
    setError(false);
    const apiKey = "fff5055fd99a4f31b6985c01ad4e58d1";
    const response = await fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
      body: JSON.stringify({ destination: inputUrl }),
    });
    const data = await response.json();
    setShortUrl(data.shortUrl);
    setShortenList([
      ...shortenList,
      { longUrl: inputUrl, shortUrl: data.shortUrl },
    ]);
    setInputUrl("");
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
  };

  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => setCopySuccess(false), 2000);
    }
  }, [copySuccess]);

  return (
    <div className="hero">
      <div className="container hero-shorten">
        <div className="shortening">
          <div className="form">
            <input
              placeholder={
                error
                  ? "Something went wrong. Check if URL is correct and try again."
                  : "Shorten a link here..."
              }
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className={error ? "error" : ""}
            />
            <button onClick={shortenUrl}>Shorten It!</button>
          </div>
          <span className={error ? "error-message" : ""}>
            {error ? "Please add a link" : ""}
          </span>
        </div>
        <ul>
          {shortenList.map((urlPair, index) => (
            <li key={index} className="shorten-li">
              <h2 className="domain">{urlPair.longUrl}</h2>
              <div className="copy-link">
                <p className="shorten-url">{urlPair.shortUrl}</p>
                <button
                  className={`copy-btn ${copySuccess ? "copy-dark" : ""}`}
                  onClick={() => copyToClipboard(urlPair.shortUrl)}
                >
                  {copySuccess ? "Copied!" : "Copy"}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Advanced />
      </div>
    </div>
  );
};

export default Hero;

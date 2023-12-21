import React, { useState } from "react";
import bookMarkPng from "../assets/bookmark.png";
import cancelPng from "../assets/cancel.png";
import { useContext } from "react";
import contextStore from "../contextStore";

function Article({
  article,

  isClicked,
}) {
  const value = useContext(contextStore);
  const { setAllArticlesArray, setAllBookMarkedArticle } = value;
  const { id, summary } = article;

  return (
    <div className="w-full border-1 border-slate-400 rounded-xl shadow-md p-2 bg-yellow-200">
      <div className="flex justify-between items-center mb-2 ">
        <h1 className="font-bold"> Article - {id}</h1>
        <img
          src={!isClicked ? bookMarkPng : cancelPng}
          alt="bookMark Logo"
          className="w-[15px] h-[15px] cursor-pointer hover:scale-105"
          onClick={() => {
            setAllArticlesArray((prevVal) =>
              prevVal.filter((article) => article.id !== id)
            );

            setAllBookMarkedArticle((prevVal) => [...prevVal, article]);
            if (isClicked) {
              setAllArticlesArray((prevVal) => {
                return [
                  ...prevVal.slice(0, id - 1),
                  article,
                  ...prevVal.slice(id - 1),
                ].sort((a, b) => a.id - b.id);
              });
              setAllBookMarkedArticle((prevVal) =>
                prevVal.filter((article) => article.id !== id)
              );
            }
          }}
        ></img>
      </div>
      <div>{summary}</div>
    </div>
  );
}

export default Article;

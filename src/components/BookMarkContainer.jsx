import React, { useState } from "react";
import AllArticles from "./AllArticles";
import BookMarkedArticles from "./BookMarkedArticles";
import { ARTICLES_DATA } from "../../constant";
import contextStore from "../contextStore";

function BookMarkContainer() {
  const [allArticlesArray, setAllArticlesArray] = useState(ARTICLES_DATA);
  const [allBookMarkedArticle, setAllBookMarkedArticle] = useState([]);
  return (
    <contextStore.Provider
      value={{
        allArticlesArray,
        setAllArticlesArray,
        allBookMarkedArticle,
        setAllBookMarkedArticle,
      }}
    >
      <div className="w-9/12 mx-auto border-1 border-slate-50 p-8 min-h-screen flex lg:flex-row flex-col bg-yellow-100 rounded-xl shadow-lg gap-2">
        <AllArticles

        />
        <BookMarkedArticles
        
        />
      </div>
    </contextStore.Provider>
  );
}

export default BookMarkContainer;

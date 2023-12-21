import React from "react";
import Article from "./Article";
import { useContext } from "react";
import contextStore from "../contextStore";

function BookMarkedArticles() {
  const value = useContext(contextStore);
  const { allBookMarkedArticle } = value;
  console.log(value);
  return (
    <div className="lg:w-6/12 min-h-full w-full border border-slate-400 rounded-lg p-4 ">
      <h1 className="font-bold text-center text-lg mb-4">
        {" "}
        BookMarked Articles
      </h1>
      {allBookMarkedArticle.length === 0 ? (
        <h1 className="font-bold text-center text-lg">
          Please have some article bookmarked😉
        </h1>
      ) : (
        <div className="flex flex-col items-center justify-evenly gap-3">
          {allBookMarkedArticle?.map((article) => (
            <Article key={article.id} article={article} isClicked={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookMarkedArticles;

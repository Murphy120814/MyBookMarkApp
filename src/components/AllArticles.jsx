import React from "react";
import Article from "./Article";

import contextStore from "../contextStore";
import { useContext } from "react";
function AllArticles() {
  const value = useContext(contextStore);
  const { allArticlesArray } = value;
  console.log(allArticlesArray);
  return (
    <div className="lg:w-6/12 min-h-full w-full border border-slate-400 rounded-lg p-4 ">
      <h1 className="font-bold text-lg text-center mb-4"> All Articles</h1>
      <div className="flex flex-col items-center justify-evenly gap-3">
        {allArticlesArray?.map((article) => (
          <Article
            key={article.id}
            article={article}
            isClicked={false}
          />
        ))}
      </div>
    </div>
  );
}

export default AllArticles;

import React, { useState } from "react";
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import Card from "./Card";
import data from "../data/data";

function Home() {

  console.log("data inside the home page is", data);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([data]);

  console.log("posts inside the home is", posts);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[30vh]">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;

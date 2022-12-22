import React from "react";
import Navigation from "./Navigation";
import PostCard from "./PostCard";
import PostFormCard from "./PostFormCard";

function Layout() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-3/12">
        <Navigation />
      </div>
      <div className="w-9/12">
        <PostFormCard />
        <PostCard />
        
      </div>
    </div>
  );
}

export default Layout;

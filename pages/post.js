import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ProjectPortfolio from "../components/ProjectPortfolio";

const Post = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ProjectPortfolio />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Post;

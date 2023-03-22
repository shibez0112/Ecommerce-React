import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">14 Mar, 2023</p>
        <h5 className="title">How Silicon Valley Dominate</h5>
        <p className="desc">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a ty
        </p>
        <Link to="/#" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

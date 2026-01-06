// src/components/Blogs.jsx
import React from "react";
import "../style/Blogs.css";
import blogData from "../data/blogData";

const Blogs = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h1 className="section-title">Latest Insights</h1>

        <div className="blog-grid">
          {blogData.map((blog) => (
            <div key={blog.title} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.hook}</p>

              {blog.points.map((point, index) => (
                <div key={index} className="point">
                  <h4>{point.heading}</h4>
                  <p>{point.description}</p>
                </div>
              ))}

              <a href={blog.ctaLink} className="cta-button">
                {blog.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

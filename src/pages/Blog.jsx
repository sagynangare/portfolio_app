import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How I Became a Web Developer",
      date: "February 1, 2024",
      content: "In this blog, I share my journey into web development...",
    },
    {
      id: 2,
      title: "Top 5 React Libraries You Must Know",
      date: "January 20, 2024",
      content: "Here are 5 essential React libraries that improve productivity...",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">📝 My Blog</h2>
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h4>{post.title}</h4>
              <small className="text-muted">{post.date}</small>
              <p>{post.content}</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

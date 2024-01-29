import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogs &&
            blogs.map((blog) => (
              <div key={blog.id} className="col">
                <div className="card">
                  <div
                    style={{ backgroundColor: "#D3D3D3" }}
                    className="card-body"
                  >
                    <h5 className="card-title">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "green",
                        }}
                        to={`/${blog.userId}`}
                      >
                        {blog.title}
                      </Link>
                    </h5>
                    <p className="card-text">{blog.body.slice(0, 100)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

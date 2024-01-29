import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Favourite = () => {
  const favouriteBlogs =
    JSON.parse(localStorage.getItem("favoriteBlogs")) || [];
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {favouriteBlogs ? (
            favouriteBlogs.map((blog) => (
              <div key={blog.id} className="col">
                <div className="card ">
                  <div className="card-body">
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
            ))
          ) : (
            <h1>No favourite Blog</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Favourite;

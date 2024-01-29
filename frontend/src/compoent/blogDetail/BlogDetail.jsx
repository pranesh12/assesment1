import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comments from "../Comments/Comments";
import Navbar from "../navbar/Navbar";

const BlogDetail = () => {
  const [favouriteBlogs, setfavouriteBlogs] = useState([]);
  const { id } = useParams();
  const [singleblog, setSingleBlog] = useState({});

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [id]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const updateBlog = { ...singleblog };

    const storedFavoriteBlogs =
      JSON.parse(localStorage.getItem("favoriteBlogs")) || [];

    if (!isChecked) {
      updateBlog.fav = true;
      if (
        !storedFavoriteBlogs.some((blog) => blog.userId === singleblog.userId)
      ) {
        const updatedFavoriteBlogs = [...storedFavoriteBlogs, updateBlog];
        localStorage.setItem(
          "favoriteBlogs",
          JSON.stringify(updatedFavoriteBlogs)
        );
        setfavouriteBlogs(updatedFavoriteBlogs);
      }
    } else {
      updateBlog.fav = false;
      const updatedFavoriteBlogs = storedFavoriteBlogs.filter(
        (blog) => blog.userId !== singleblog.userId
      );
      localStorage.setItem(
        "favoriteBlogs",
        JSON.stringify(updatedFavoriteBlogs)
      );
      setfavouriteBlogs(updatedFavoriteBlogs);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="d-flex align-items-center">
          <div className="p-2">
            <h6>Favourite</h6>
          </div>
          <div>
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
            />
          </div>
        </div>
        {singleblog && (
          <div className="mt-5 mb-5">
            <h2>{singleblog.title}</h2>
            <p>{singleblog.body}</p>
          </div>
        )}

        <Comments />
      </div>
    </>
  );
};

export default BlogDetail;

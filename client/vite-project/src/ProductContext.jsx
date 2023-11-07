import { createContext, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const blogContext = createContext({});

// eslint-disable-next-line react/prop-types
export const BlogContextProvider = ({ children }) => {
  const [blogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blog = await axios.get("//localhost:4000/blogs");
        blogs.push(blog.data);
        console.log(blogs);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogs();
  }, []);

  const value = {
    blogs,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
};

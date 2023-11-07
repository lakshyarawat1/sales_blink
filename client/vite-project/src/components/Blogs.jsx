import { useContext, useState } from "react";
import { blogContext } from "../ProductContext";
import { SearchInput } from "evergreen-ui";

const Blogs = () => {
  const { blogs } = useContext(blogContext);
  const [value, setValue] = useState("");

  console.log(blogs);

  return (
    <div className="p-24">
      <SearchInput
        className="mb-2"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>Latest Blogs</h2>
      <div className="flex gap-10">
        <div className="shadow-xl hover:scale-105 p-10">
          {blogs.map((blog, idx) => (
            <div key={idx}>
              <img
                src={blog[0].imageUrl}
                className="h-36 rounded-lg m-5 hover:scale-110"
              />
              <h1 className="text-3xl font-bold p-5">{blog[0].title}</h1>
              <p className=" px-5">{blog[0].desc} </p>
            </div>
          ))}
        </div>
        <div className="shadow-xl hover:scale-105 p-10">
          {blogs.map((blog, idx) => (
            <div key={idx}>
              <img
                src={blog[0].imageUrl}
                className="h-36 rounded-lg m-5 hover:scale-110"
              />
              <h1 className="text-3xl font-bold p-5">{blog[0].title}</h1>
              <p className=" px-5">{blog[0].desc} </p>
            </div>
          ))}
        </div>
        <div className="shadow-xl hover:scale-105 p-10">
          {blogs.map((blog, idx) => (
            <div key={idx}>
              <img
                src={blog[0].imageUrl}
                className="h-36 rounded-lg m-5 hover:scale-110"
              />
              <h1 className="text-3xl font-bold p-5">{blog[0].title}</h1>
              <p className=" px-5">{blog[0].desc} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

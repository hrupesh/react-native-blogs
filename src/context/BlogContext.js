import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { Title: "Blog 1", Body: "Body for blog 1" },
    { Title: "Blog 2", Body: "Body for blog 2" },
    { Title: "Blog 3", Body: "Body for blog 3" },
    { Title: "Blog 4", Body: "Body for blog 4" },
  ];

  const [blogs, setBlogs] = useState([]);

  const addBlog = () => {
    setBlogs([
      ...blogs,
      {
        Title: `Blog ${blogs.length + 1}`,
        Body: `Body for blog ${blogs.length + 1}`,
      },
    ]);
  };

  return <BlogContext.Provider value={{ data: blogs, addBlog }}>{children}</BlogContext.Provider>;
};

export default BlogContext;

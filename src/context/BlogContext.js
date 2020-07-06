import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { Title: "Blog 1", Body: "Body for blog 1" },
    { Title: "Blog 2", Body: "Body for blog 2" },
    { Title: "Blog 3", Body: "Body for blog 3" },
    { Title: "Blog 4", Body: "Body for blog 4" },
  ];

  const [blogs, setBlogs] = useState(blogPosts);

  const addBlog = () => {
    setBlogs([
      ...blogPosts,
      {
        Title: `Blog ${blogPosts.length + 1}`,
        Body: `Body for blog ${blogPosts.length + 1}`,
      },
    ]);
  };

  return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>;
};

export default BlogContext;

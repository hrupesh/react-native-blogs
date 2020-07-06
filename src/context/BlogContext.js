import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogs = [
    { Title: "Blog 1", Body: "Body for blog 1" },
    { Title: "Blog 2", Body: "Body for blog 2" },
    { Title: "Blog 3", Body: "Body for blog 3" },
    { Title: "Blog 4", Body: "Body for blog 4" },
  ];
  return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>;
};

export default BlogContext;

import React, { useReducer } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { Title: "Blog 1", Body: "Body for blog 1" },
    { Title: "Blog 2", Body: "Body for blog 2" },
    { Title: "Blog 3", Body: "Body for blog 3" },
    { Title: "Blog 4", Body: "Body for blog 4" },
  ];

  const blogReducer = (state, action) => {
    switch (action.type) {
      case "addBlog":
        return [
          ...state,
          {
            Title: `Blog ${state.length + 1}`,
            Body: `Body for blog ${state.length + 1}`,
          },
        ];
      default:
        return state;
    }
  };
  console.log("yes!");

  const [blogs, dispatch] = useReducer(blogReducer, blogPosts);

  const addBlogPost = () => {
    dispatch({ type: "addBlog" });
  };

  return (
    <BlogContext.Provider value={{ data: blogs, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

import React, { useReducer } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { id: 1, Title: "Blog 1", Body: "Body for blog 1" },
  ];

  const blogReducer = (state, action) => {
    switch (action.type) {
      case "addBlog":
        return [
          ...state,
          {
            id: state.length + 1,
            Title: `Blog ${state.length + 1}`,
            Body: `Body for blog ${state.length + 1}`,
          },
        ];
      default:
        return state;
    }
  };

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

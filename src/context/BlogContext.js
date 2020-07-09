import React, { useReducer } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ id: ''+Math.floor(Math.random() * 99999999), Title: "Blog 1", Body: "Body for blog 1" }];

  const blogReducer = (state, action) => {
    switch (action.type) {
      case "addBlog":
        return [
          ...state,
          {
            id: ''+Math.floor(Math.random() * 99999999),
            Title: `Blog ${state.length + 1}`,
            Body: `Body for blog ${state.length + 1}`,
          },
        ];
      case "deleteBlog":
        return state.filter((state) => state.id !== action.payload);
      default:
        return state;
    }
  };

  const [blogs, dispatch] = useReducer(blogReducer, blogPosts);

  const addBlogPost = () => {
    dispatch({ type: "addBlog" });
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "deleteBlog", payload: id });
  };

  return (
    <BlogContext.Provider value={{ data: blogs, addBlogPost, deleteBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

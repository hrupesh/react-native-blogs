import React, { useReducer } from "react";
import jsonServer from "../api/jsonServer";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    {
      id: "" + Math.floor(Math.random() * 99999999),
      Title: "Blog 1",
      Body: "Body for blog 1",
    },
  ];

  const blogReducer = (state, action) => {
    switch (action.type) {
      case "addBlog":
        return [
          ...state,
          {
            id: "" + Math.floor(Math.random() * 99999999),
            Title: action.payload[0],
            Body: action.payload[1],
          },
        ];
      case "editBlog":
        return (state = state.map((p) =>
          p.id === action.payload[0]
            ? { ...p, Title: action.payload[1], Body: action.payload[2] }
            : p
        ));
      case "deleteBlog":
        return state.filter((state) => state.id !== action.payload);
      default:
        return state;
    }
  };

  const [blogs, dispatch] = useReducer(blogReducer, blogPosts);

  const getBlogPosts = () => {
    dispatch({ type: "getBlogs" });
  };

  const addBlogPost = ([title, body]) => {
    dispatch({ type: "addBlog", payload: [title, body] });
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "deleteBlog", payload: id });
  };

  const editBlogPost = ([id, title, body]) => {
    dispatch({ type: "editBlog", payload: [id, title, body] });
  };

  return (
    <BlogContext.Provider
      value={{ data: blogs, addBlogPost, deleteBlogPost, editBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

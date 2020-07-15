import React, { useReducer, useEffect } from "react";
import jsonServer from "../api/jsonServer";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    {
      id: "" + Math.floor(Math.random() * 99999999),
      Title: "Loading.......",
      Body: "Please Wait.....",
    },
  ];

  const blogReducer = (state, action) => {
    switch (action.type) {
      case "getBlogs":
        return action.payload;
      case "addBlog":
        return action.payload;
      case "editBlog":
        // return (state = state.map((p) =>
        //   p.id === action.payload[0]
        //     ? { ...p, Title: action.payload[1], Body: action.payload[2] }
        //     : p
        // ));
        return action.payload;
      case "deleteBlog":
        // return state.filter((state) => state.id !== action.payload);
        return action.payload;
      default:
        return state;
    }
  };

  const [blogs, dispatch] = useReducer(blogReducer, []);

  const getBlogPosts = async () => {
    const { data } = await jsonServer.get("blogPosts");
    dispatch({ type: "getBlogs", payload: data });
  };

  const addBlogPost = async ([title, body]) => {
    await jsonServer.post("/blogPosts", { Title: title, Body: body });
    const { data } = await jsonServer.get("blogPosts");
    dispatch({ type: "addBlog", payload: data });
  };

  const deleteBlogPost = async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    const { data } = await jsonServer.get("/blogPosts");
    dispatch({ type: "deleteBlog", payload: data });
  };

  const editBlogPost = async ([id, title, body]) => {
    await jsonServer.put(`/blogPosts/${id}`, { Title: title, Body: body });
    const { data } = await jsonServer.get("blogPosts");
    dispatch({ type: "editBlog", payload: data });
    // alert("Edited");
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogs,
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

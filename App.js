import React, { useState, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import { StatusBar } from "expo-status-bar";
import ViewBlog from "./src/screens/ViewBlog";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ViewBlog: ViewBlog,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs ✍🏽",
      headerStyle: {
        backgroundColor: "#111",
        height: 100,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "100",
        fontSize: 24,
        textAlign: "center",
        letterSpacing: 2,
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App style={{ fontFamily: "Roboto" }} />
      <StatusBar backgroundColor="#ccc"></StatusBar>
    </BlogProvider>
  );
};

console.log("Completed!");
console.log("Completed!");
console.log("Completed!");
console.log("Completed!");

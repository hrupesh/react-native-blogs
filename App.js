import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import { StatusBar } from "expo-status-bar";
import ViewBlog from "./src/screens/ViewBlog";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ViewBlog: ViewBlog
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs ✍🏽",
      headerStyle: {
        backgroundColor: "#111",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "400",
        textAlign:'center',
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
      <StatusBar backgroundColor="#ccc" ></StatusBar>
    </BlogProvider>
  );
};

import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import { StatusBar } from "expo-status-bar";
import ViewBlog from "./src/screens/ViewBlog";
import CreateScreen from "./src/screens/CreateScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ViewBlog: ViewBlog,
    Create: CreateScreen,
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
        fontWeight: "100",
        fontSize: 24,
        textAlign: "center",
        letterSpacing: 2,
      },
    },
  }
);

const fetchFonts = () => {
  return Font.loadAsync({
    "Nunito Sans Regular": require("./assets/NunitoSans-Regular.ttf"),
  });
};

const App = createAppContainer(navigator);

export default () => {
  const { loaded, setLoaded } = useState(false);

  if(!loaded){
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
      />
    )
  }

  return (
    <BlogProvider>
      <App />
      <StatusBar backgroundColor="#ccc"></StatusBar>
    </BlogProvider>
  );
};

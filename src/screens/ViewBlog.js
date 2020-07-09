import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function ViewBlog({ route, navigation }) {
  // const { data } = useContext(BlogContext);

  //   const { blog } = route.params;
  console.log(navigation);
  console.log(route);

  return (
    <View>
      <Text>hi!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

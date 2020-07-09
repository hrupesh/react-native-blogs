import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function ViewBlog({ navigation }) {
  // const { data } = useContext(BlogContext);

  const { blog } = navigation.state.params;
  console.log(blog);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blog.Title}</Text>
      <Text style={styles.body}>{blog.Body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingBottom: 10,
    color: "white",
  },
  body: {
    color: "white",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

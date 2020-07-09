import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function ViewBlog({ navigation }) {
  // const { data } = useContext(BlogContext);

  const { blog } = navigation.state.params;
  console.log(blog);

  return (
    <View style={styles.container}>
      <View style={styles.blogCard}>
        <Text style={styles.title}>{blog.Title}</Text>
        <Text style={styles.body}>{blog.Body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    paddingBottom: 30,
    color: "white",
  },
  body: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.5,
  },
  blogCard:{
      margin:25,
      padding:25,
      backgroundColor:'#111',
      borderTopColor:'dodgerblue',
      borderTopWidth:5
  }
});

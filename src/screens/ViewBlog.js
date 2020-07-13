import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BlogContext from "../context/BlogContext";

export default function ViewBlog({ navigation }) {
  const { data, deleteBlogPost } = useContext(BlogContext);

  // const { blog } = navigation.state.params;

  // console.log(data);
  // console.log(navigation);

  const blog = data.find((blog) => blog.id === navigation.getParam("id"));

  // console.log(blog);

  const deletethisBlog = () => {
    navigation.navigate("Index");
    setTimeout(() => {
      deleteBlogPost(blog.id)
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.blogCard}>
        <Text style={styles.title}>{blog.Title}</Text>
        <Text style={styles.body}>{blog.Body}</Text>
        <Button title="Delete" onPress={() => deletethisBlog()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#673AFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    paddingBottom: 30,
    // color: "white",
  },
  body: {
    paddingBottom: 30,
    // color: "white",
    fontSize: 20,
    letterSpacing: 0.5,
  },
  blogCard: {
    margin: 25,
    padding: 25,
    // paddingVertical: 30,
    backgroundColor: "#eee",
    // borderTopColor: "#448AFF",
    // borderTopWidth: 5,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    borderRadius:10,
    elevation:10
  },
});

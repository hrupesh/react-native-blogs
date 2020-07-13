import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function CreateScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Add New Blog</Text>
        <View style={styles.seperator} ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
    padding: 25,
  },
  heading: {
    fontSize: 32,
    letterSpacing: 2,
    color: "black",
    textAlign: "left",
    borderLeftColor:'#512DA8',
    borderLeftWidth:3,
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:'#ddd'
  },
  formContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "#eee",
    marginVertical: 15,
    padding: 25,
  },
});

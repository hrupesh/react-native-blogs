import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function CreateScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View>
      <Text>Create Screen Works!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

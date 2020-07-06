import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const value = useContext(BlogContext);
  console.log(value);

  return (
    <View>
      <Text>Index Screen works! </Text>
      <Text>Value = </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

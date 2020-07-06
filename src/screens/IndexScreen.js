import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

export default function IndexScreen() {
  const blogs = useContext(BlogContext);
  console.log(blogs);

  return (
    <View>
      <Text>Index Screen works! </Text>
      <FlatList
        data={blogs}
        keyExtractor={(blog) => blog.Title}
        renderItem={({item}) => {
        return <Text>{item.Title} : {item.Body}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

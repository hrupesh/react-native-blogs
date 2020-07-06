import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

export default function IndexScreen() {
  const value = useContext(BlogContext);
  console.log(value);

  return (
    <View>
      <Text>Index Screen works! </Text>
      <FlatList 
        data={value}
        keyExtractor={(blog) => blog.Title }
        renderItem={(item) =>{
            return <Text>{item}</Text>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

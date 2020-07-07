import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  //   console.log(data);
  const blogs = data;
  //   console.log(blogs);

  return (
    <View style={styles.container}>
      <Text>Index Screen works! </Text>
      <FlatList
        style={styles.list}
        data={blogs}
        keyExtractor={(blog) => blog.Title}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.Title} : {item.Body}
            </Text>
          );
        }}
      />
      {/* <TouchableOpacity
        style={styles.addIconContainer}
        activeOpacity={0.7}
        onPress={() => addBlogPost()}
      >
        <View style={styles.addIcon}>
          <Ionicons name="ios-add" size={60} color="#4CAF50" />
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  addIconContainer: {
    alignItems: "flex-end",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  addIcon: {
    backgroundColor: "#000",
    padding: 15,
    margin: 15,
    width: 60,
    height: 60,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      height: 50,
      width: 50,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  list: {
    padding: 25,
  },
});

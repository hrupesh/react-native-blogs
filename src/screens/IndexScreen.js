import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  //   console.log(data);
  const blogs = data;
  //   console.log(blogs);

  return (
    <View style={styles.container}>
      {/* <Text>Index Screen works! </Text> */}
      <FlatList
        style={styles.list}
        data={blogs}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.blog}>
              <Text style={styles.title}>{item.Title}</Text>
              <Text style={styles.body}>{item.Body}</Text>
              <AntDesign
                style={styles.deleteIcon}
                name="delete"
                size={40}
                color="tomato"
              />
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addIconContainer}
        activeOpacity={0.7}
        onPress={() => addBlogPost()}
      >
        <View style={styles.addIcon}>
          <Ionicons name="ios-add" size={60} color="#4CAF50" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addIconContainer: {
    alignItems: "flex-end",
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: "center",
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
  blog: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingBottom: 10,
  },
  body: {
    fontSize: 16,
    letterSpacing: 0.5,
  },
  deleteIcon: {
    position: "absolute",
    right: 25,
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
    },
    textShadowRadius: 2,
  },
});

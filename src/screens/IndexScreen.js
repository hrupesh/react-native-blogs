import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  //   console.log(data);
  const blogs = data;
  //   console.log(blogs);

  return (
    <View style={styles.container}>
      {/* <Text>Index Screen works! </Text> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={blogs}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("ViewBlog", {
                  blog: item,
                })
              }
            >
              <View style={styles.blog}>
                <View>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.body}>{item.Body}</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteIconContainer}
                  activeOpacity={0}
                  onPress={() => deleteBlogPost(item.id)}
                >
                  <AntDesign
                    style={styles.deleteIcon}
                    name="delete"
                    size={40}
                    color="tomato"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <TouchableOpacity
        style={styles.addIconContainer}
        activeOpacity={0.7}
        onPress={() => addBlogPost()}
      > */}
      <View style={styles.addIcon}>
        <Ionicons
          name="ios-add"
          onPress={addBlogPost}
          size={60}
          color="#4CAF50"
        />
      </View>
      {/* </TouchableOpacity> */}
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
    zIndex: 99,
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
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 10,
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "#444",
  },
  list: {
    padding: 25,
  },
  blog: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: "row",
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
  deleteIconContainer: {
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
    },
    textShadowRadius: 2,
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 50,
    padding: 10,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    // position: "absolute",
    // right: 25,
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
    },
    textShadowRadius: 2,
  },
});
console.log("Test");
console.log("Test");
console.log("Test");

import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import jsonServer from "../api/jsonServer";

export default function IndexScreen({ navigation }) {
  const { data, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(
    BlogContext
  );
  //   console.log(data);
  const blogs = data;
  //   console.log(blogs);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  // const result = async () => {
  //   const { data } = await jsonServer.get("/blogPosts");
  //   console.log(data);
  // };

  // result();

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
                  id: item.id,
                })
              }
            >
              <View style={styles.blog}>
                <View style={{}}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.body}>{item.Body}</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteIconContainer}
                  activeOpacity={0.6}
                  onPress={() => deleteBlogPost(item.id)}
                >
                  <AntDesign
                    style={styles.deleteIcon}
                    name="delete"
                    size={36}
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
      {/* <View style={styles.addIcon}>
        <Ionicons
          name="ios-add"
          onPress={addBlogPost}
          size={60}
          color="#4CAF50"
        />
      </View> */}
      {/* </TouchableOpacity> */}
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather
          style={styles.headeraddIcon}
          name="plus"
          size={40}
          color="green"
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  addIconContainer: {
    alignItems: "flex-end",
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  headeraddIcon: {
    padding: 10,
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
    backgroundColor: "#673AFF",
    // paddingBottom:5
  },
  list: {
    padding: 25,
    marginBottom: 0,
  },
  blog: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 0,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingBottom: 10,
    // color: "white",
  },
  body: {
    color: "#666",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  deleteIconContainer: {
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
    },
    textShadowRadius: 2,
    borderWidth: 3,
    borderColor: "tomato",
    borderRadius: 50,
    padding: 10,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
    elevation: 100,
  },
  deleteIcon: {
    // position: "absolute",
    // right: 25,
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
    },
    textShadowRadius: 0.5,
  },
});

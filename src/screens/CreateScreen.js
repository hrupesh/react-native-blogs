import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import BlogContext from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  const submitHandler = (title, body) => {
    if (title && body) {
      addBlogPost([title, body]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {title || body ? (
        <View style={styles.blogContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        </View>
      ) : null}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Add New Blog</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            autoCompleteType="off"
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Body</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setBody(text)}
          />
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#673AFF",
    padding: 25,
  },
  heading: {
    fontSize: 24,
    letterSpacing: 2,
    color: "#512DA8",
    textAlign: "center",
    borderLeftColor: "#512DA8",
    borderLeftWidth: 5,
    borderRightColor: "#512DA8",
    borderRightWidth: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ddd",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#eee",
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 10,
    elevation: 10,
  },
  blogContainer: {
    width: "100%",
    backgroundColor: "#eee",
    marginVertical: 15,
    paddingVertical: 5,
    borderRadius: 10,
    elevation: 10,
  },
  inputContainer: {
    padding: 25,
  },
  label: {
    fontSize: 18,
    color: "#512DA8",
    letterSpacing: 2,
  },
  title: {
    fontSize: 22,
    color: "#512DA8",
    letterSpacing: 2,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  body: {
    fontSize: 18,
    color: "#512DA8",
    letterSpacing: 1,
    paddingVertical: 25,
  },
  input: {
    backgroundColor: "#eee",
    height: 50,
    fontSize: 18,
    marginLeft: 5,
    borderBottomColor: "#512DA8",
    borderBottomWidth: 2,
  },
  btn: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#512DF8",
    padding: 10,
    borderRadius: 25,
    elevation: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});

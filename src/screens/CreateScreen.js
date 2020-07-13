import React, { useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import BlogContext from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Add New Blog</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Body</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.body}>Title</Text>
        </View>
      </View>
    </View>
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
    fontWeight:'bold'
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

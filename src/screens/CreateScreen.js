import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function CreateScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View style={styles.container}>
      <Text  style={styles.heading}>Add New Blog</Text>
      <View style={styles.formContainer}>
            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#444',
        padding:25
    },
    heading:{
        fontSize:32,
        letterSpacing:2,
        color:'white',
        textAlign:'center',

    }
});

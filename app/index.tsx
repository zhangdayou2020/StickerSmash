import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Hello 张汝斌 </Text>
      <Link href="/about" style={styles.button}>  
        <Text style={{ color: "blue" }}>go to关于屏幕</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text:{
    color:'white',
  },
  button: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
  }
})

import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
type Props = {
  label: string;
  theme?: "primary";
};

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#ffd33d", // 使用主题颜色
            borderRadius: 18,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#007bff" }]} // 使用主题颜色
          onPress={() => alert(" You Button Pressed")} // 添加一个简单的点击事件
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View
      style={[
        styles.buttonContainer,
        {
          borderWidth: 4,
          borderColor: "#ffd33d", // 使用主题颜色
          borderRadius: 18,
        },
      ]}
    >
      <Pressable
        style={styles.button} // 使用主题颜色
        onPress={() => alert(" You Button Pressed")} // 添加一个简单的点击事件
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 18,
  },
  buttonIcon: {
    marginRight: 18,
  },
});

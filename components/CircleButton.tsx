import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
type Props = {
  onPress?: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d", // 使用主题颜色
    borderRadius: 42, // 圆形按钮的半径
    padding: 3,
  },
  circleButton: {
    flex: 1,
    borderRadius: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // 使用主题颜色
  },
});

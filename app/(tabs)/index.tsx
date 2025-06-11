import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import React from "react";
import { StyleSheet, View } from "react-native";
// const PlaceholderImage = require("../../assets/images/background-image");
// 现在真是好好要给Copilot 充钱啊 太好用了吧  这个地方 我没有加上后缀 还是人工智能提前给处理好了
// 尤其是还有自带的代码 补全的一堆功能 想想华为 鹏新旭那群傻逼的 还不让用vpn 世界最先进的一些工具 那类傻逼再也不想看到了
const PlaceholderImage = require("../../assets/images/background-image.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="选择一个图片" />
        <Button label="使用一个图片" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 29,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    backgroundColor: "red",
  },
});

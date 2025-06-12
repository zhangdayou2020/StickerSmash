import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { StyleSheet, View } from "react-native";
// const PlaceholderImage = require("../../assets/images/background-image");
// 现在真是好好要给Copilot 充钱啊 太好用了吧  这个地方 我没有加上后缀 还是人工智能提前给处理好了
// 尤其是还有自带的代码 补全的一堆功能 想想华为 鹏新旭那群傻逼的 还不让用vpn 世界最先进的一些工具 那类傻逼再也不想看到了
const PlaceholderImage = require("../../assets/images/background-image.png");
export default function Index() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = React.useState(false);
  // 选择图片的函数
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
      // 这里可以处理选中的图片
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      console.log("用户取消的图片的选择");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    console.log("添加");
  };
  const onSaveImageAsync = async () => {
    console.log("保存");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
      </View>
      {showAppOptions ? (
        <View>
          <View>
            <IconButton icon="refresh" label="重置" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="保存"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="选择一个图片"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="使用一个图片"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
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

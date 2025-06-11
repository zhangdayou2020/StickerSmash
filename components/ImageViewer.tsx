import { Image } from "expo-image";
import React from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";
type Props = {
  // ImageSourcePropType 开始我的图片 一直不出来 去对照代码 发现了这个 图片的默认值 不能为字符串 我们使用ts 有专门的类型定义
  // 想想如果我们使用的是字符串类型的图片路径 那么就会报错  编程也需要年限的 没有这么些年踩的坑 很多解决问题的思路是没有的
  imgSource: ImageSourcePropType;
};
export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

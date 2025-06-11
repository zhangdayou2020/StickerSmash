import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false, // 隐藏顶部导航栏
      }}/>
     
      <Stack.Screen name="+not-found" options={{
        headerShown:false
      }}/>
    </Stack>
  );
}

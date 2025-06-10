import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle:'大佑的首页'
      }}/>
      <Stack.Screen name="about" options={{
        headerTitle:'大佑关于屏幕'
      }}/>
    </Stack>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
          headerShown: true, // 显示顶部导航栏
          tabBarActiveTintColor: 'green', // 选中时的颜色
          tabBarInactiveTintColor: 'gray', // 未选中时的颜色
          tabBarStyle: {
            backgroundColor: '#fff', // 底部标签栏背景色
          },
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'hammer-outline'}
              color={color}
              size={24}
            />
          ), // 默认图标
        }}
    >
      <Tabs.Screen name="index" options={{
        headerTitle:'大佑的首页'
      }}/>
      <Tabs.Screen name="about" options={{
        headerTitle:'大佑关于屏幕'
      }}/>
      <Tabs.Screen name="+not-found" options={{
        headerShown:false
      }}/>
    </Tabs>
  );
}

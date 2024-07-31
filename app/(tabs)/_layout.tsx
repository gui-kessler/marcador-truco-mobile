import { Tabs } from "expo-router";
import React from "react";

import { Icon } from "@/components/Icon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Truco",
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "cards" : "cards-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="canastra"
        options={{
          title: "Canastra",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "cards-spade" : "cards-spade-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondaryText,
        tabBarShowLabel: true,
        headerShadowVisible: false,
        tabBarStyle: {
          height: 60,
          margin: 12,
          borderRadius: 12,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="(groups)"
        options={{
          title: "Groups",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qrcode"
        options={{
          title: "QR Code",
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                width: 74,
                height: 74,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                bottom: 8,
                borderWidth: 2,
                borderColor: focused ? Colors.primary : Colors.white,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: focused ? Colors.primary : Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: focused ? Colors.white : Colors.primary,
                }}
              >
                <Ionicons
                  name="qr-code-outline"
                  color={focused ? Colors.white : Colors.primary}
                  size={48}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

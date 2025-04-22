import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
        tabBarShowLabel: true,
        headerShadowVisible: false,
        tabBarStyle: {
          height: 60,
          margin: 12,
          borderRadius: 12,
          backgroundColor: Colors.primary,
        },
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
          tabBarIcon: () => (
            <View
              style={{
                width: 74,
                height: 74,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                bottom: 8,
                borderWidth: 2,
                borderColor: Colors.white,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: Colors.primary,
                }}
              >
                <Ionicons
                  name="qr-code-outline"
                  color={Colors.primary}
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

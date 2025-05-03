import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs, usePathname } from "expo-router";
import { View, Text } from "react-native";

export default function TabsLayout() {
  const pathname = usePathname();
  const onGroups = pathname.includes("groups");
  const onEvents = pathname.includes("events");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondaryText,
        tabBarShowLabel: true,
        headerShown: false,
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
        name="(people)"
        options={{
          title: "People",
          headerTitleStyle: { display: "none" },
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={24}
            />
          ),
          headerLeft: () => (
            <View className="flex flex-row gap-4 m-3">
              <Link href="/events/host" className="text-xl">
                <Ionicons
                  name={
                    onEvents ? "calendar-number" : "calendar-number-outline"
                  }
                  color={onEvents ? Colors.primary : Colors.secondaryText}
                  size={28}
                />
              </Link>
              <Link href="/groups/owned-by-me" className="text-xl">
                <Ionicons
                  name={onGroups ? "people" : "people-outline"}
                  color={onGroups ? Colors.primary : Colors.secondaryText}
                  size={28}
                />
              </Link>
              <Text className="text-xl font-semibold">
                {onEvents ? "Events" : "Groups"}
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(qrcode)"
        options={{
          title: "QR Code",
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused }) => (
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
                  borderColor: focused ? Colors.white : Colors.secondaryText,
                }}
              >
                <Ionicons
                  name="qr-code-outline"
                  color={focused ? Colors.white : Colors.secondaryText}
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

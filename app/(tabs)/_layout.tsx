import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

// bad type fix (AI fix)
type IconName = React.ComponentProps<typeof Ionicons>["name"];

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShadowVisible: false,
      }}
    >
      {navBarIcons.map((icon) => (
        <Tabs.Screen
          key={icon.screenName}
          name={icon.screenName}
          options={{
            title: icon.title,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused
                    ? (icon.focusIcon as IconName)
                    : (icon.unfocusIcon as IconName)
                }
                color={color}
                size={icon.size}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const navBarIcons = [
  {
    screenName: "index",
    title: "People",
    focusIcon: "people",
    unfocusIcon: "people-outline",
    size: 24,
  },
  {
    screenName: "qrcode",
    title: "QR Code",
    focusIcon: "qr-code",
    unfocusIcon: "qr-code-outline",
    size: 24,
  },
  {
    screenName: "profile",
    title: "Profile",
    focusIcon: "person-circle",
    unfocusIcon: "person-circle-outline",
    size: 24,
  },
];

export default TabsLayout;

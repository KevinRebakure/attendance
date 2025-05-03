import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomBottomTabsBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  console.log(state.routeNames);

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {Object.keys(icons).includes(route.name)
              ? icons[route.name as IconKey](isFocused, colors.primary)
              : null}
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {/*AI fix*/}

              {typeof label === "function"
                ? label({
                    focused: isFocused,
                    color: isFocused ? colors.primary : colors.text,
                    position: "below-icon",
                    children: "",
                  })
                : label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

type IconKey = "(people)" | "index" | "profile";

const icons: Record<IconKey, (focused: boolean, color: string) => JSX.Element> =
  {
    "(people)": (focused: boolean, color: string) => (
      <Ionicons
        name={focused ? "people" : "people-outline"}
        color={color}
        size={24}
      />
    ),
    index: (focused: boolean, color: string) => (
      <Ionicons
        name={focused ? "qr-code" : "qr-code-outline"}
        color={color}
        size={48}
      />
    ),
    profile: (focused: boolean, color: string) => (
      <Ionicons
        name={focused ? "person-circle" : "person-circle-outline"}
        color={color}
        size={24}
      />
    ),
  };

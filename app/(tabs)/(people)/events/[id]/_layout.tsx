import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function EventLayout() {
  return (
    <View>
      <Text>Kevin</Text>
      <Slot />
    </View>
  );
}

import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function GroupLayout() {
  return (
    <View>
      <View className="flex flex-row gap-3">
        <Link href="/">
          <Text>Host</Text>
        </Link>
        <Link href="/guest">
          <Text>Guest</Text>
        </Link>
      </View>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="guest" />
      </Stack>
    </View>
  );
}

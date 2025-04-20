import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-400">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/about" className="text-blue-600 underline">
        Go to About Screen
      </Link>
    </View>
  );
}

import { Link, Stack } from "expo-router";
import { View } from "react-native";

function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View>
        <Link href="/" className="text-blue-600 underline">
          Go to Home Screen
        </Link>
      </View>
    </>
  );
}

export default NotFoundScreen;

import { Stack } from "expo-router";

export default function QRCodeLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" />
      <Stack.Screen name="fullscreen" options={{ headerShown: false }} />
    </Stack>
  );
}

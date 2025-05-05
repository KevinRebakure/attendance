import { Stack } from "expo-router";

export default function QRLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="qrcode" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="generate" />
    </Stack>
  );
}

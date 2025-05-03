import { Stack } from "expo-router";

export default function QRLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="qrcode" />
    </Stack>
  );
}

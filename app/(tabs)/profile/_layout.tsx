import { Stack } from "expo-router";

function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="edit-profile"
        options={{
          presentation: "modal",
          headerTitle: "Edit profile",
        }}
      />
    </Stack>
  );
}

export default ProfileLayout;

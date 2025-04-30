import { Stack } from "expo-router";

function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="editProfileModal"
        options={{
          presentation: "modal",
          headerTitle: "Edit profile",
        }}
      />
    </Stack>
  );
}

export default ProfileLayout;

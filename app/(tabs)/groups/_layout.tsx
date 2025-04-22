import { Stack } from "expo-router";

export default function GroupLayout() {
  return (
    // <View>
    //   <View className="flex flex-row gap-3">
    //     <Link href="/groups/index">
    //       <Text>Host</Text>
    //     </Link>
    //     <Link href="/groups/guest">
    //       <Text>Guest</Text>
    //     </Link>
    //   </View>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="guest" />
    </Stack>
    // </View>
  );
}

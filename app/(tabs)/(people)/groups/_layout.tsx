import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

function GroupsLayout() {
  return (
    <View className="m-3 flex gap-4 relative h-full">
      {/* Top navigation */}
      <View className="flex flex-row gap-4 m-3">
        <Link href="/groups/owned-by-me" className="text-xl">
          <Text>Owned by me</Text>
        </Link>
        <Link href="/groups/member-to" className="text-xl">
          <Text>Member to</Text>
        </Link>
      </View>
      {/* Render the current route */}
      <Slot />
    </View>
  );
}

export default GroupsLayout;

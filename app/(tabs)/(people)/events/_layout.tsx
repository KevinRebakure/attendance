import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

function EventsLayout() {
  return (
    <View className="m-3 flex gap-4 relative h-full">
      {/* Top navigation */}
      <View className="flex flex-row gap-4 m-3">
        <Link href="/events/host" className="text-xl">
          <Text>Host</Text>
        </Link>
        <Link href="/events/guest" className="text-xl">
          <Text>Guest</Text>
        </Link>
      </View>
      {/* Render the current route */}
      <Slot />
    </View>
  );
}

export default EventsLayout;

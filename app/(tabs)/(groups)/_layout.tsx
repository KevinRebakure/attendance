import { Link, Slot, usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function GroupLayout() {
  const pathname = usePathname();

  const isHostActive = pathname === "/";
  const isGuestActive = pathname === "/guest";
  return (
    <View className="m-3 flex gap-4 relative h-full">
      {/* Top navigation */}
      <View className="flex flex-row gap-4 m-3">
        <Link href="/(tabs)/(groups)" className="text-xl">
          <Text
            className={
              isHostActive
                ? "text-primary font-semibold"
                : "text-gray-500 font-semibold"
            }
          >
            Host
          </Text>
        </Link>
        <Link href="/(tabs)/(groups)/guest" className="text-xl">
          <Text
            className={
              isGuestActive
                ? "text-primary font-semibold"
                : "text-gray-500 font-semibold"
            }
          >
            Guest
          </Text>
        </Link>
      </View>
      {/* Render the current route */}
      <Slot />
    </View>
  );
}

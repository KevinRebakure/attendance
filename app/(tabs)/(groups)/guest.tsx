import { Link, usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function Guest() {
  const pathname = usePathname();

  const isHostActive = pathname === "/";
  const isGuestActive = pathname === "/guest";

  return (
    <>
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
      <View className="flex items-center justify-center h-full">
        <Text>I am a guest here</Text>
      </View>
    </>
  );
}

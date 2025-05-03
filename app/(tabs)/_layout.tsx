import CustomBottomTabsBar from "@/components/CustomBottomTabsBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs, usePathname } from "expo-router";
import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabsLayout() {
  const pathname = usePathname();
  const onGroups = pathname.includes("groups");
  const onEvents = pathname.includes("events");

  return (
    <Tabs tabBar={(props) => <CustomBottomTabsBar {...props} />}>
      <Tabs.Screen
        name="(people)"
        options={{
          headerLeft: () => (
            <View className="flex flex-row gap-4 m-3">
              <Link href="/events/host" className="text-xl">
                <Ionicons
                  name={
                    onEvents ? "calendar-number" : "calendar-number-outline"
                  }
                  color={onEvents ? Colors.primary : Colors.secondaryText}
                  size={28}
                />
              </Link>
              <Link href="/groups/owned-by-me" className="text-xl">
                <Ionicons
                  name={onGroups ? "people" : "people-outline"}
                  color={onGroups ? Colors.primary : Colors.secondaryText}
                  size={28}
                />
              </Link>
              <Text className="text-xl font-semibold">
                {onEvents ? "Events" : "Groups"}
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

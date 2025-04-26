import { usePathname } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { Text, View } from "react-native";

function EventsLayout() {
  const pathname = usePathname();

  const onGuestTab = pathname === "/events/guest";
  const onHostTab = pathname === "/events/host";

  return (
    <View className="m-3 flex gap-4 h-full relative">
      {/* Created a custom tabs by using multiple tabs bar:  https://docs.expo.dev/router/advanced/custom-tabs/#multiple-tab-bars*/}
      <Tabs>
        {/* A custom tab bar */}
        <View className="flex flex-row justify-start gap-4 mb-4">
          <TabTrigger
            name="host"
            className={`${onHostTab && "border-b-2 border-primary"}  p-2`}
          >
            <Text
              className={`${onHostTab ? "text-primary" : "text-primaryText"} text-xl font-semibold`}
            >
              Host
            </Text>
          </TabTrigger>
          <TabTrigger
            name="guest"
            className={`${onGuestTab && "border-b-2 border-primary"}  p-2`}
          >
            <Text
              className={`${onGuestTab ? "text-primary" : "text-primaryText"} text-xl font-semibold`}
            >
              Guest
            </Text>
          </TabTrigger>
        </View>

        <TabList style={{ display: "none" }}>
          <TabTrigger name="guest" href="/events/guest">
            <Text>Guest</Text>
          </TabTrigger>
          <TabTrigger name="host" href="/events/host">
            <Text>Host</Text>
          </TabTrigger>
        </TabList>

        {/* Render the route here */}
        <TabSlot />
      </Tabs>
    </View>
  );
}

export default EventsLayout;

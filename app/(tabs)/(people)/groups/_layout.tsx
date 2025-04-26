import { usePathname } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { Text, View } from "react-native";

export default function GroupsLayout() {
  const pathname = usePathname();

  const onMemberTo = pathname === "/groups/member-to";
  const onOwnedByMe = pathname === "/groups/owned-by-me";

  return (
    <View className="m-3 flex gap-4 relative h-full">
      {/* Created a custom tabs by using multiple tabs bar:  https://docs.expo.dev/router/advanced/custom-tabs/#multiple-tab-bars*/}
      <Tabs>
        {/* A custom tab bar */}
        <View className="flex flex-row justify-start gap-4 mb-4">
          <TabTrigger
            name="owned-by-me"
            className={`${onOwnedByMe && "border-b-2 border-primary"}  p-2`}
          >
            <Text
              className={`${onOwnedByMe ? "text-primary" : "text-primaryText"} text-xl font-semibold`}
            >
              Owned by me
            </Text>
          </TabTrigger>
          <TabTrigger
            name="member-to"
            className={`${onMemberTo && "border-b-2 border-primary"}  p-2`}
          >
            <Text
              className={`${onMemberTo ? "text-primary" : "text-primaryText"} text-xl font-semibold`}
            >
              Member to
            </Text>
          </TabTrigger>
        </View>

        <TabList style={{ display: "none" }}>
          <TabTrigger name="owned-by-me" href="/groups/owned-by-me">
            <Text>Owned by me</Text>
          </TabTrigger>
          <TabTrigger name="member-to" href="/groups/member-to">
            <Text>Member to</Text>
          </TabTrigger>
        </TabList>
        {/* Render the route here */}
        <TabSlot />
      </Tabs>
    </View>
  );
}

import {
  Slot,
  useLocalSearchParams,
  usePathname,
  useRouter,
} from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function EventLayout() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const pathname = usePathname();
  const onDetails = pathname === `/events/${id}`;
  const onScans = pathname === `/events/${id}/scans`;

  return (
    <View>
      <View className="flex flex-row gap-2 p-3">
        <Pressable
          onPress={() => {
            router.dismissTo(`/events/${id}`);
          }}
        >
          <Text
            className={`font-bold p-2 ${
              onDetails ? "border-b-2 border-primary " : "text-secondaryText"
            }`}
          >
            Details
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.dismissTo(`/events/${id}/scans`);
          }}
        >
          <Text
            className={`font-bold p-2 ${
              onScans ? "border-b-2 border-primary " : "text-secondaryText"
            }`}
          >
            Scans
          </Text>
        </Pressable>
      </View>
      <Slot />
    </View>
  );
}

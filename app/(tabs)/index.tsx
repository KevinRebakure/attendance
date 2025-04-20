import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="m-3 flex gap-4 relative h-full">
      {/* Top navigation */}
      <View className="flex flex-row gap-2">
        <Text className="font-semibold">Host</Text>
        <Text className="text-secondaryText">Guest</Text>
      </View>

      {/* Create a new group */}
      <TouchableOpacity
        onPress={() => console.log("Create new group")}
        className="absolute bottom-7 right-4 bg-primary rounded-full self-start p-3 mt-4 active:text-primary"
      >
        <Ionicons name="person-add-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

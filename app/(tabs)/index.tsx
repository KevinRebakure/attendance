import { Colors } from "@/constants/colors";
import { Text, TouchableHighlight, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  return (
    <View className="m-3 flex gap-4">
      {/* Top navigation */}
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-2">
          <Text className="font-semibold">Host</Text>
          <Text className="text-secondaryText">Guest</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Create a new group */}
      <TouchableHighlight
        onPress={() => console.log("Create new group")}
        className="bg-primary rounded-lg self-start px-4 py-3 mt-4 active:text-primary"
        underlayColor={Colors.darkPrimary}
      >
        <Text className="text-white">+ Create a new group</Text>
      </TouchableHighlight>
    </View>
  );
}

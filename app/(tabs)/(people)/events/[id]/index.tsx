import { Text, View } from "react-native";

export default function EventScreen() {
  return (
    <View className="p-3">
      <View className="flex flex-row gap-3">
        <View className="p-4 rounded-xl flex-1 border-primary border">
          <Text className="font-bold">Date</Text>
          <Text>Thu, April 24th</Text>
          <Text>09:00 - 10:00</Text>
        </View>
        <View className="bg-primary rounded-xl">
          <Text className="font-bold text-white">Date</Text>
          <Text className="text-4xl font-bold text-white">48</Text>
        </View>
      </View>
    </View>
  );
}

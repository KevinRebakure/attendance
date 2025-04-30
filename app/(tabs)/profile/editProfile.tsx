import { Image, ScrollView, Text, View } from "react-native";

export default function Profile() {
  return (
    <ScrollView>
      <View className="flex h-full gap-12 p-4">
        <View className="flex items-center gap-3 mt-16">
          <View className="relative w-32 h-32 rounded-full border-2 border-primary p-1">
            <Image
              source={require("@/assets/images/avatar.png")}
              className="w-full h-full object-cover rounded-full opacity-70"
            />
            <Image
              source={require("@/assets/images/edit.png")}
              className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </View>
          <View>
            <Text className="text-xl font-bold text-center">
              Kevin Rebakure
            </Text>
            <Text className="text-center">kevinrebakure@gmail.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

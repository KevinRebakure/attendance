import { Text, View } from "react-native";

export default function GroupListItem({ name }: { name: string }) {
  return (
    <View className="bg-blue-700 w-full">
      <Text>{name}</Text>
    </View>
  );
}

import { Text, View } from "react-native";

export default function GroupListItem({ name }: { name: string }) {
  return (
    <View className="py-4 border-b border-dividor mx-3">
      <Text>{name}</Text>
    </View>
  );
}

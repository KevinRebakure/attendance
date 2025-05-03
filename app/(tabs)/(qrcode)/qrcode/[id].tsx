import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function QRCode() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>A particular QR code with a unique ID: {id}</Text>
    </View>
  );
}

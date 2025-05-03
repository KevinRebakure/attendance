import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Image, Pressable, View } from "react-native";

export default function FullScreen() {
  const router = useRouter();
  const exitFullScreen = () => router.dismiss();

  return (
    <View className="flex items-center justify-center h-full">
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Micro_QR_code_example.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Pressable onPress={exitFullScreen} className="absolute top-4 left-4">
        <Ionicons name="close" size={36} color="black" />
      </Pressable>
    </View>
  );
}

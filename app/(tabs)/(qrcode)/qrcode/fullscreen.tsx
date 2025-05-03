import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname, useRouter } from "expo-router";
import { Image, Pressable, View } from "react-native";

export default function FullScreen() {
  const router = useRouter();
  const exitFullScreen = () => router.dismiss();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <View className="flex items-center justify-center h-full">
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Micro_QR_code_example.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Pressable onPress={exitFullScreen} className="absolute top-2 left-2">
        <Ionicons name="close" size={24} color="black" />
      </Pressable>
    </View>
  );
}

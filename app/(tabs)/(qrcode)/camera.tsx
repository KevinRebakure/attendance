import { Text, View, Image, Pressable } from "react-native";
import { CameraView } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Camera() {
  const closeCamera = () => console.log("Close camera!");
  const scanFromImage = () => console.log("Scan from image");
  const turnOnFlashlight = () => console.log("Turn on flashlight");

  return (
    <CameraView>
      <View className="h-full p-6">
        <View className="flex items-center h-full justify-evenly">
          <Text className="text-2xl font-bold text-primary">Scan QR code</Text>
          <Image
            source={require("@/assets/images/qr-scan.png")}
            className="w-60 h-60"
          />

          <View className="flex flex-row gap-8 bg-primary p-4 rounded-full">
            <Pressable onPress={scanFromImage}>
              <Ionicons name="images-outline" size={28} color="white" />
            </Pressable>
            <Pressable onPress={turnOnFlashlight}>
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={28}
                color="white"
              />
            </Pressable>
          </View>
        </View>
        <Pressable onPress={closeCamera} className="absolute top-4 left-4">
          <Ionicons name="close" size={36} color="black" />
        </Pressable>
      </View>
    </CameraView>
  );
}

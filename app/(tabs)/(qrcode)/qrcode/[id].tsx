import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { qrCodes } from "..";
import { useEffect } from "react";

export default function QRCode() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const code = qrCodes.find((code) => code.id === id);

  useEffect(() => {
    navigation.setOptions({ headerShown: false, headerTitle: code?.title });
  }, [code?.title, navigation]);

  const share = () => console.log("Share the preview");
  const fullscreen = () => console.log("View in full screen");
  const deleteQRCode = () => console.log("Delete the QR code");
  return (
    <View className="p-4 gap-8">
      <View className="flex gap-1">
        <Text className="text-2xl font-bold">{code?.title}</Text>
        <Text>{code?.eventDate}</Text>
        <Text className="text-xs text-secondaryText">
          {code?.startTime} - {code?.endTime}
        </Text>
      </View>

      <View className="mx-auto flex items-center">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Micro_QR_code_example.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Expiring in {code?.expiryTime} min</Text>
      </View>

      <View className="gap-3">
        <View className="flex flex-row items-center justify-between gap-2">
          <Pressable
            className="bg-dividor p-4 flex-1 rounded-lg "
            onPress={fullscreen}
          >
            <Text className="text-center">View in full screen</Text>
          </Pressable>
          <Pressable
            className="bg-primary p-4 flex-1 rounded-lg "
            onPress={share}
          >
            <Text className="text-white text-center">Share the preview</Text>
          </Pressable>
        </View>

        <Pressable onPress={deleteQRCode}>
          <View className="border p-4 rounded-xl flex flex-row gap-2">
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="black"
            />
            <Text>Terminate this QR code</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { qrCodes } from "..";

export default function QRCode() {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const code = qrCodes.find((code) => code.id === id);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: code?.title });
  }, [code?.title, navigation]);

  const share = () => console.log("Share the preview");
  const fullscreen = () => router.push("/qrcode/fullscreen");
  const deleteQRCode = () => console.log("Delete the QR code");
  return (
    <View className="p-4 gap-8">
      <View className="flex gap-1">
        <Text>{code?.eventDate}</Text>
        <Text className="text-xs text-secondaryText">
          {code?.startTime} - {code?.endTime}
        </Text>
      </View>

      {/* QR code */}
      <View className="mx-auto flex items-center">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Micro_QR_code_example.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Expiring in {code?.expiryTime} min</Text>
      </View>

      {/* Action buttons */}
      <View className="gap-3">
        <View className="flex flex-row items-center justify-between gap-2">
          <Pressable
            className="bg-dividor p-3 flex-1 rounded-lg "
            onPress={fullscreen}
          >
            <View className="flex flex-row gap-2">
              <MaterialCommunityIcons
                name="fullscreen"
                size={24}
                color="black"
              />
              <Text className="text-center">View in full screen</Text>
            </View>
          </Pressable>
          <Pressable
            className="bg-primary p-3 flex-1 rounded-lg "
            onPress={share}
          >
            <View className="flex flex-row gap-2">
              <Ionicons name="eye-outline" size={24} color="white" />
              <Text className="text-white text-center">Share the preview</Text>
            </View>
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

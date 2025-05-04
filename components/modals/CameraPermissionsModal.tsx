import { useRouter } from "expo-router";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function CameraPermissionsModal({
  requestPermission,
  isOpen,
}: {
  requestPermission: () => void;
  isOpen: boolean;
}) {
  const router = useRouter();
  const dismiss = () => router.dismiss();
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-5/6 bg-white rounded-2xl p-5 shadow-md flex gap-4">
          <Text className="text-2xl font-bold">Access to your camera</Text>
          <Text className="text-center">
            We need access to your camera, to be able to scan QR codes
          </Text>

          <View className="flex flex-row items-center justify-between gap-2">
            <Pressable
              className="bg-dividor p-4 flex-1 rounded-lg "
              onPress={dismiss}
            >
              <Text className="text-white text-center">Dismiss</Text>
            </Pressable>
            <Pressable
              className="bg-primary p-4 flex-1 rounded-lg "
              onPress={requestPermission}
            >
              <Text className="text-white text-center">Grant permission</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

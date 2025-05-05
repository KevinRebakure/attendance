import { View } from "react-native";
import QRCode from "react-qr-code";
import { qrCodes } from ".";

export default function Generate() {
  const event = qrCodes[0];
  return (
    <View>
      <QRCode value={JSON.stringify(event)} size={256} />
    </View>
  );
}

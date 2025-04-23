import { Colors } from "@/constants/colors";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function CreateGroupModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [input, setInput] = useState("");
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Create a new group</Text>
          <Text style={styles.modalText}>Group name</Text>
          <TextInput
            placeholder="Type a name here..."
            value={input}
            onChangeText={setInput}
            style={styles.input}
          />
          <View style={styles.modalActionButtons}>
            <Pressable style={styles.cancelButton} onPress={() => closeModal()}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.saveButton}
              onPress={() => {
                closeModal();
                console.log(input);
                setInput("");
              }}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#0000006c",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    gap: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  cancelButton: {
    backgroundColor: Colors.dividor,
    padding: 16,
    flex: 1,
    borderRadius: 8,
    marginRight: 4,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    flex: 1,
    borderRadius: 8,
    marginLeft: 4,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {},
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalActionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 8,
  },
});

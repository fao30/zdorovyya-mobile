import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const ModalComp = ({ modalVisible, onPressOK, onPressCancel, content }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {content}
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#CED6E1",
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  paddingVertical: 10,
                }}
              >
                <Pressable onPress={onPressCancel}>
                  <Text style={{ padding: 6, color: "#3989FA", fontSize: 16 }}>
                    ОТМЕНИТЬ
                  </Text>
                </Pressable>
                <Pressable onPress={onPressOK}>
                  <Text style={{ padding: 6, color: "#3989FA", fontSize: 16 }}>
                    ОК
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

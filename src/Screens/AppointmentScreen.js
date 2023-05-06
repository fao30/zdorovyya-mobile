import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { appointment } from "../Styles/Appointment";
import { clinics } from "../Styles/Clinics";
import { SvgXml } from "react-native-svg";
import { date, doctor, location } from "../Icons/Appointment";
import { doctorIcon, expandIcon, hideIcon } from "../Icons/HideExpand";
import { Navigation } from "../Components/Navigation";
import ModalComp from "../Components/Modal";
import { add, plant, share } from "../Icons/Navigation";
import Checkbox from "expo-checkbox";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const cardData = [
  { icon: date, desc: "23.08.2022, 12:00" },
  { icon: location, desc: "от Клиника “Кузляр”, Ул. Щапова 12, дом 23" },
  { icon: doctor, desc: "Шамсутдинов Ильдарджарах Айдарович" },
];

const AppointmentScreen = ({ navigation }) => {
  const [isExpand, setIsExpand] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  function closeModal() {
    setModalVisible(false);
  }
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <>
      <ModalComp
        modalVisible={modalVisible}
        onPressCancel={closeModal}
        content={
          <View
            style={{ paddingVertical: 20, flexDirection: "colum", gap: 14 }}
          >
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{ color: "#9197B3", fontWeight: 700, fontSize: 18 }}
                >
                  Номер записи:
                </Text>
                <Text
                  style={{ color: "#9197B3", fontWeight: 700, fontSize: 18 }}
                >
                  dnajsd
                </Text>
              </View>
              <Pressable
              // onPress={()=>{}}
              >
                <SvgXml xml={share} />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "column",
                gap: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgXml xml={plant} />
              <Text style={{ fontSize: 20, color: "black", fontWeight: 700 }}>
                Вы успешно записаны!
              </Text>
            </View>
            <View style={{ flexDirection: "column", gap: 10, width: "80%" }}>
              <Text style={{ fontSize: 16 }}>Психотерапевт:</Text>
              {cardData?.map((e, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <SvgXml xml={e?.icon} />
                    </View>
                    <Text>{e?.desc}</Text>
                  </View>
                );
              })}
            </View>
            <View style={{ flexDirection: "column", gap: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#9197B3" }}>Уведомить о записи:</Text>
                <Checkbox
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 7,
                  }}
                  value={toggleCheckBox}
                  onValueChange={setToggleCheckBox}
                  color={toggleCheckBox ? "#3989FA" : "black"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#9197B3" }}>
                  Добавить в гугл календарь
                </Text>
                <Pressable
                // onPress={()=>{}}
                >
                  <SvgXml xml={add} />
                </Pressable>
              </View>
            </View>
          </View>
        }
      />

      <SafeAreaView
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <KeyboardAwareScrollView
          extraScrollHeight={100}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <ScrollView
            style={{ paddingHorizontal: 24, paddingTop: 24, gap: 16 }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 6,
              }}
            >
              <View style={appointment.card}>
                <View
                  style={{ flexDirection: "column", gap: 10, width: "55%" }}
                >
                  <Text style={appointment.cardTextHeading}>
                    Обследование почек
                  </Text>
                  {cardData?.map((e, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          flexDirection: "row",
                          gap: 6,
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <SvgXml xml={e?.icon} />
                        </View>
                        <Text>{e?.desc}</Text>
                      </View>
                    );
                  })}
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "40%",
                    alignItems: "flex-end",
                  }}
                >
                  <View>
                    <SvgXml xml={doctorIcon} />
                  </View>
                  <Text style={{ fontSize: 20 }}>4 600P</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", gap: 8, paddingTop: 6 }}>
                <Text style={appointment.textQNA}>
                  Что входит обследование?
                </Text>
                <Text style={appointment.textQNA}>
                  Как проходит обследование?
                </Text>
              </View>
              <View style={clinics.chooseAddressLess}>
                <TouchableOpacity
                  style={clinics.orderItem}
                  // key={id}
                  onPress={() => {
                    setIsExpand(!isExpand);
                  }}
                >
                  <View style={clinics.row}>
                    <Text style={clinics.addressTitle}>Выбрать адрес</Text>
                    <View>
                      <SvgXml xml={isExpand ? expandIcon : hideIcon} />
                    </View>
                  </View>
                  <Text style={clinics.address}>Улица Сибгата Хакима, д56</Text>
                  {isExpand && (
                    <View style={{ gap: 6, paddingTop: 10 }}>
                      <Text>Улица Сибгата Хакима, д56</Text>
                      <Text>Улица Сибгата Хакима, д56</Text>
                      <Text>Улица Сибгата Хакима, д56</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ gap: 24 }}>
              <View style={{ gap: 8 }}>
                <Text style={{ fontSize: 18 }}>Ваши данные</Text>
                <TextInput style={appointment.input} placeholder="ФИО" />
                <TextInput
                  style={appointment.input}
                  placeholder="+7 (854) 204 13 34"
                />
              </View>
              <View style={{ gap: 8 }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <View style={appointment.buttonConfirm}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      Записаться на прием
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={appointment.buttonAnother}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "#3989FA",
                        fontSize: 16,
                      }}
                    >
                      Записать другого человека
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <Navigation navigation={navigation} active="main" />
      </SafeAreaView>
    </>
  );
};

export default AppointmentScreen;

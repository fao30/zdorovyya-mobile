import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { DateLists } from "../Components/Clinics/DateLists";
import { RadioGroup } from "react-native-radio-buttons-group";
import { SvgXml } from "react-native-svg";
import { chosenDateIcon } from "../Icons/HideExpand";
import Checkbox from "expo-checkbox";
import { filters } from "../Styles/Filter";
import { Navigation } from "../Components/Navigation";
import { appointment } from "../Styles/Appointment";

export default function FilterScreen({ navigation }) {
  const timeData = React.useMemo(() => [
    {
      id: "1",
      value: "morning",
      label: "Утро до 11:00",
      containerStyle: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "100%",
      },
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
        fontWeight: 500,
        fontSize: 16,
      },
      size: 22,
    },
    {
      id: "2",
      value: "afternoon",
      label: "День 11:00 - 17:00",
      containerStyle: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "100%",
      },
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
        fontWeight: 500,
        fontSize: 16,
      },
      size: 22,
    },
    {
      id: "3",
      value: "evening",
      label: "Вечер после 17:00",
      containerStyle: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "100%",
      },
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
        fontWeight: 500,
        fontSize: 16,
      },
      size: 22,
    },
  ]);

  const genderData = [
    {
      value: 0,
      label: "М",
    },
    {
      value: 1,
      label: "Ж",
    },
  ];

  const [region, setRegion] = React.useState([
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "2",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "4",
      checked: true,
    },
    {
      label: "Вахитовский",
      quantity: "6",
      checked: true,
    },
    {
      label: "Вахитовский",
      quantity: "4",
      checked: true,
    },
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },

    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
    {
      label: "Вахитовский",
      quantity: "12",
      checked: false,
    },
  ]);

  const [checked, setChecked] = React.useState();
  const [selectedGender, setSelectedGender] = React.useState(null);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          paddingVertical: 24,
          marginHorizontal: 24,
          gap: 16,
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#CED6E1",
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "column", gap: 12 }}>
            <Text style={filters.textHeader}>Дата приема</Text>
            <DateLists />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#CED6E1",
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "column", gap: 8, paddingBottom: 16 }}>
            <Text style={filters.textHeader}>Время приема</Text>
            <RadioGroup
              radioButtons={timeData}
              onPress={setChecked}
              selectedId={checked}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#CED6E1",
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "column", gap: 12, paddingBottom: 16 }}>
            <Text style={filters.textHeader}>Пол врача</Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              {genderData?.map((e, i) => {
                return (
                  <Pressable
                    onPress={() => setSelectedGender(e?.value)}
                    key={i}
                  >
                    <View
                      style={{
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor:
                          selectedGender !== e?.value ? "#E6EEFB" : "white",
                        backgroundColor:
                          selectedGender === e?.value ? "#E6EEFB" : "white",
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>{e.label}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 12 }}>
          <Text style={filters.textHeader}>Район</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: 190 }}
          >
            {region?.map((e, i) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    paddingVertical: 8,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <SvgXml xml={chosenDateIcon} />
                    <Text style={filters.text}>{e?.label}</Text>
                    <Text
                      style={{ fontSize: 16, color: "#9197B3" }}
                    >{`(${e?.quantity})`}</Text>
                  </View>
                  <Checkbox
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      borderColor: "#3989FA",
                    }}
                    value={e?.checked}
                    onValueChange={(e) => {
                      const temp = [...region];
                      temp[i].checked = e;
                      setRegion(temp);
                    }}
                    color={e?.checked ? "#3989FA" : "black"}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: "auto",
          padding: 24,
          position: "absolute",
          bottom: 90,
          width: "100%",
        }}
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
            Применять фильтры
          </Text>
        </View>
      </TouchableOpacity>
      <Navigation navigation={navigation} active="main" />
    </SafeAreaView>
  );
}

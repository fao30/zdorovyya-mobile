import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { chosenDateIcon } from "../Icons/HideExpand";
import { filters } from "../Styles/Filter";
import Checkbox from "expo-checkbox";
import { appointment } from "../Styles/Appointment";
import { Navigation } from "../Components/Navigation";

export default function FilterRegionScreen({ navigation }) {
  const [regionSearch, setRegionSearch] = React.useState("");
  const [selected, setSelected] = React.useState(0);
  const toggleData = [
    {
      value: 0,
      label: "Район",
    },
    {
      value: 1,
      label: "Метро",
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
  ]);

  const [metro, setMetro] = React.useState([
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "2",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "4",
      checked: true,
    },
    {
      label: "Горки",
      quantity: "6",
      checked: true,
    },
    {
      label: "Горки",
      quantity: "4",
      checked: true,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },

    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
    {
      label: "Горки",
      quantity: "12",
      checked: false,
    },
  ]);

  const filteredData = selected === 0 ? region : metro;

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 12,
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: 5,
            marginVertical: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Район"
            value={regionSearch}
            onChangeText={setRegionSearch}
            style={{ paddingRight: 12, width: "90%", fontSize: 16 }}
          />
          <SvgXml xml={searchIcon} style={{ width: "10%" }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {toggleData?.map((e, i) => {
            return (
              <Pressable
                key={i}
                style={{
                  paddingVertical: 6,
                  width: "50%",
                  borderBottomWidth: 2,
                  borderColor: selected === e?.value ? "#3989FA" : "#E6EEFB",
                }}
                onPress={() => setSelected(i)}
              >
                <Text style={{ textAlign: "center" }}>{e?.label}</Text>
              </Pressable>
            );
          })}
        </View>
        <ScrollView
          style={{ paddingVertical: 20, height: "60%" }}
          showsVerticalScrollIndicator={false}
        >
          {filteredData?.map((e, i) => {
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
                    const temp = [...filteredData];
                    temp[i].checked = e;
                    selected === 0 ? setRegion(temp) : setMetro(temp);
                  }}
                  color={e?.checked ? "#3989FA" : "black"}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
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

const searchIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9.5L12.5 12.5" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75 10.5C8.37335 10.5 10.5 8.37335 10.5 5.75C10.5 3.12665 8.37335 1 5.75 1C3.12665 1 1 3.12665 1 5.75C1 8.37335 3.12665 10.5 5.75 10.5Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

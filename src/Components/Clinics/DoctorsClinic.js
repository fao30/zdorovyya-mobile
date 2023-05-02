import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  Pressable,
  FlatList,
  Animated,
} from "react-native";
// import { ClinicLists } from "../Clinics/ClinicsLists.js";

import { SvgXml } from "react-native-svg";

// import { addressIcon, callIcon, metroIcon } from "../Icons/HideExpand";
import { DateLists } from "./DateLists";
import { TimeLists } from "./TimeLists";
import { ReviewStarts } from "./ReviewStarts";
import {
  addressIcon,
  callIcon,
  discountIcon,
  doctorIcon,
  expandIcon,
  metroIcon,
} from "../../Icons/HideExpand";
import { Navigation } from "../Navigation";
import { favButton } from "../../Icons/Specializations";
import { clinics } from "../../Styles/Clinics";
import { home } from "../../Styles/Home";

export const DoctorsClinic = ({ navigation, data }) => {
  const [isExpand, setIsexpand] = useState(false);

  const params = data;
  const { name, about, contact, address, metro, reviews, star, startingPrice } =
    params;

  return (
    <SafeAreaView style={clinics.container}>
      <ScrollView>
        <View style={home.searchBar}>
          <TextInput
            style={home.searchInput}
            placeholder="Врач, услуга, клиника..."
          />
          <View style={clinics.textToMiddle}>
            <Text style={clinics.clinicCountBranch}>Всего 12 врачей</Text>
          </View>
          <View style={clinics.doctorsBox}>
            <View>
              <View>
                <SvgXml xml={doctorIcon} />
              </View>
            </View>
            <View>
              <View>
                <Text style={clinics.doctorName}>
                  Каштанов Григорий Сергеевич
                </Text>
              </View>
              <View style={clinics.doctorCategory}>
                <Text style={clinics.doctorCategory}>Высшая категория</Text>
              </View>
              <View style={clinics.doctorCategory}>
                <Text style={clinics.doctorCategory}>Стаж 12 лет</Text>
              </View>
              <View style={clinics.reviewShowDoctor}>
                <View style={{ paddingTop: 5 }}>
                  <ReviewStarts stars={5}></ReviewStarts>
                </View>
                <Text>(12 отзывов)</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 10, flexDirection: "row", gap: 10 }}>
            <Text>От 1290Р</Text>
            <Text>
              {"2290Р"
                .split("")
                .map((char) => char + "\u0336")
                .join("")}
            </Text>
            <View>
              <SvgXml xml={discountIcon} />
            </View>
          </View>
          <View style={clinics.clinicContactDoctorsLess}>
            <Text style={clinics.contact}>+7 (854) 204 13 34</Text>
            <Text style={clinics.contactCall}>Позвонить</Text>
          </View>
          <View style={clinics.chooseAddressLess}>
            <TouchableOpacity
              style={clinics.orderItem}
              // key={id}
              onPress={() => {
                setIsexpand(isExpand ? false : true);
              }}
            >
              <View style={clinics.row}>
                <Text style={clinics.addressTitle}>Выбрать адрес</Text>
                <View>
                  <SvgXml xml={expandIcon} />
                </View>
              </View>
              <Text style={clinics.address}>Улица Сибгата Хакима, д56</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* <Navigation navigation={navigation} params={params} active="main" /> */}
    </SafeAreaView>
  );
};

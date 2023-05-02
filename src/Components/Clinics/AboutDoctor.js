import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  SafeAreaView,
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
  expandIcon,
  metroIcon,
} from "../../Icons/HideExpand";
import { Navigation } from "../Navigation";
import { favButton } from "../../Icons/Specializations";
import { clinics } from "../../Styles/Clinics";

export const AboutDoctor = ({ navigation, data }) => {
  const [isExpand, setIsexpand] = useState(false);

  const params = data;
  const { specializations, about, educations } = params;

  return (
    <SafeAreaView style={clinics.container}>
      <View style={clinics.doctorsAddressesDetail}>
        <Text style={clinics.nameDetail}>Специализация</Text>
        <Text>Острые психозы;</Text>
        <Text>Невростения;</Text>
        <Text>Наркологические случаи</Text>
        <Text>Депрессия</Text>
        <Text>
          Острые психотические расстройства, в том числе на фоне употребления
          психоактивных веществ;
        </Text>
        <Text style={clinics.nameDetail}>О враче</Text>
        <Text>
          Казанский государственный медецинский университет (2005, диплом с
          отличием)
        </Text>
        <Text style={clinics.nameDetail}>Образование</Text>
        <Text>
          Казанский государственный медецинский университет (2005, диплом с
          отличием)
        </Text>
        <Text>
          2012 г. - защита кандидатской диссертации на тему “Мед практики”
        </Text>
        <Text>
          2016 г. - Повышение квалификации по специальности “Психотерапия”
        </Text>
      </View>
    </SafeAreaView>
  );
};

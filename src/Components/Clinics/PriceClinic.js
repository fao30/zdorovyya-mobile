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
import { addressIcon, callIcon, metroIcon } from "../../Icons/HideExpand";
import { Navigation } from "../Navigation";
import { favButton } from "../../Icons/Specializations";
import { clinics } from "../../Styles/Clinics";
import { home } from "../../Styles/Home";

export const PriceClinic = ({ navigation, data }) => {
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
          <View style={clinics.priceBox}>
            <View style={clinics.boxPrice}>
              <View style={clinics.boxPriceTitle}>
                <Text style={clinics.boxPriceTitle}>Обследование нервной</Text>
                <Text style={clinics.paddingTopAdded10}>От 6440 Р</Text>
              </View>
              <View style={clinics.boxPriceButton}>
                <Text style={clinics.detailText}>Подробнее</Text>
              </View>
            </View>
          </View>
          <View style={clinics.priceBox}>
            <View style={clinics.boxPrice}>
              <View style={clinics.boxPriceTitle}>
                <Text style={clinics.boxPriceTitle}>
                  Диагностика заболеваний
                </Text>
                <Text style={clinics.paddingTopAdded10}>От 1210 Р</Text>
              </View>
              <View style={clinics.boxPriceButton}>
                <Text style={clinics.detailText}>Подробнее</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <Navigation navigation={navigation} params={params} active="main" /> */}
    </SafeAreaView>
  );
};

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
import { ReviewTesti } from "./ReviewTesti";
import { ReviewStarBoxes } from "./ReviewStarBoxes";
import { TestimonialLists } from "./TestimonialLists";

export const ReviewClinic = ({ navigation, data }) => {
  const [isExpand, setIsexpand] = useState(false);

  const params = data;
  const { name, about, contact, address, metro, reviews, star, startingPrice } =
    params;

  return (
    <SafeAreaView style={clinics.container}>
      <View style={home.searchBar}>
        <View style={clinics.ratingTop}>
          <View style={clinics.ratingTopTextDiv}>
            <View>
              <Text style={clinics.ratingTopText}>
                Рейтинг по отзывам пользователей
              </Text>
            </View>
            <View style={clinics.reviewGroupUsers}>
              <Text>4.2</Text>
              <View>
                <ReviewStarts isOrange={true} stars={4}></ReviewStarts>
              </View>
              <Text style={clinics.clinicReviewTesti}>12 отзывов</Text>
            </View>
          </View>
          <View>
            <ReviewTesti data={[15, 2, 4, 5, 7]}></ReviewTesti>
          </View>
        </View>
        <ScrollView
          // style={home.salesHorizontal}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <ReviewStarBoxes />
        </ScrollView>
        <View>
          <TestimonialLists
            data={[
              {
                id: "1",
                name: "Роман",
                message:
                  "Хочу выразить благодарность Гараеву Владиславу Леонидовичу! Врач от Бога! ",
                stars: "5",
                date: "21.01.2022",
              },
              {
                id: "2",
                name: "Адель",
                message:
                  "Хочу выразить благодарность Юрову Олегу Леонидовичу! Врач от Бога! Квалифицированный специалист в области неврологии. Попала совершенно...",
                stars: "4",
                date: "12.12.2021",
              },
              {
                id: "3",
                name: "Адель",
                message: "Хочу выразить благодарность",
                stars: "4",
                date: "12.12.2021",
              },
              {
                id: "4",
                name: "Адель",
                message:
                  "Хочу выразить благодарность Юрову Олегу Леонидовичу! Врач от Бога! Квалифицированный специалист в области неврологии. Попала совершенно...",
                stars: "5",
                date: "12.12.2021",
              },
            ]}
          />
        </View>
      </View>

      <Navigation navigation={navigation} params={params} active="main" />
    </SafeAreaView>
  );
};

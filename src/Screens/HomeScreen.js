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
} from "react-native";
import { SvgUri } from "react-native-svg";
import { home } from "../Styles/Home";
import { MaskedTextInput } from "react-native-mask-text";
import { Navigation } from "../Components/Navigation";
import { OrdersList } from "../Components/Orders/OrdersList";
import { MainSales } from "../Components/Sales/MainSales";
import { ListSales } from "../Components/Sales/ListSales";
import { Iconsnav } from "../Components/IconsNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState("");
  const [token, setToken] = React.useState("");
  const [topsales, setTopSale] = React.useState([]);
  const [sales, setSales] = React.useState([]);
  // const requestBody = `phone=${route.params.phone}`;
  const requestBody = `phone={79178605317}`;
  const params = route.params;

  let nameText = "";

  fetch("https://app.aaccent.su/healthyme/profile.php", {
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: requestBody,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      setName(result.profile);
    });
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();

  return (
    <SafeAreaView style={home.container}>
      <ScrollView
        stickyHeaderIndices={[1]}
        style={home.scrollStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={home.top}>
          <View style={home.left}>
            <Text style={home.hello}>Здравствуйте</Text>
            {name ? <Text style={home.name}>{name}</Text> : ""}
          </View>
          <View style={home.right}>
            <Iconsnav navigation={navigation} />
          </View>
        </View>

        <View style={home.searchBar}>
          <Pressable
            onPress={() => {
              navigation.navigate("Specializations");
            }}
          >
            <View pointerEvents="none">
              <TextInput
                style={home.searchInput}
                placeholder="Врач, услуга, клиника..."
              />
            </View>
          </Pressable>
        </View>
        <View style={home.ordersButton}>
          <TouchableOpacity style={home.orderDoctor}>
            <SvgUri
              uri="https://app.aaccent.su/healthyme/lifesavers.svg?ver=2.5"
              style={{
                width: "100%",
                height: 100,
                position: "absolute",
                left: 0,
                bottom: 0,
                zIndex: 100,
              }}
            />
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={{
                width: "100%",
                height: 100,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            />

            <Text style={home.orderText}>Запись к</Text>
            <Text style={home.orderText}>врачу</Text>
          </TouchableOpacity>
          <TouchableOpacity style={home.orderConsult}>
            <SvgUri
              uri="https://app.aaccent.su/healthyme/organs.svg?ver=2.5"
              style={{
                width: "100%",
                height: 100,
                position: "absolute",
                right: 0,
                bottom: 0,
                zIndex: 100,
              }}
            />

            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={{
                width: "100%",
                height: 100,
                position: "absolute",
                bottom: 0,
              }}
            />
            <Text style={home.orderText}>Обследования</Text>
            <Text style={home.orderText}>и процедуры</Text>
          </TouchableOpacity>
        </View>
        <View style={home.feed}>
          <Text style={home.feedTitle}>Лента событий</Text>
        </View>
        <OrdersList />

        <MainSales />
        <ListSales />
      </ScrollView>

      <Navigation navigation={navigation} params={params} active="main" />
    </SafeAreaView>
  );
};

import React, { useCallback } from "react";
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
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { sales } from "../Styles/Sales";
import { home } from "../Styles/Home";
import { MaskedTextInput } from "react-native-mask-text";
import { Navigation } from "../Components/Navigation";
import { Iconsnav } from "../Components/IconsNav";
import { MainSales } from "../Components/Sales/MainSales";
import { ListSales } from "../Components/Sales/ListSales";

export const SalesScreen = ({ navigation, route }) => {
  const params = route.params;

  return (
    <SafeAreaView style={sales.container}>
      <View style={sales.top}>
        <Text style={sales.title}>Акции</Text>
      </View>

      <MainSales />
      <ListSales />
      <MainSales />
      <Navigation navigation={navigation} params={params} active="sales" />
    </SafeAreaView>
  );
};

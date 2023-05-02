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
import { SvgXml } from "react-native-svg";
import { health } from "../Styles/Health";
import { home } from "../Styles/Home";
import { MaskedTextInput } from "react-native-mask-text";
import { Navigation } from "../Components/Navigation";
import { Iconsnav } from "../Components/IconsNav";
import { pedometer, watercounter, notify } from "../Icons/Health";

export const HealthScreen = ({ navigation, route }) => {
  const params = route.params;

  //ONPRESS GA ADA, NO ACTION
  //HARD CODE

  return (
    <SafeAreaView style={health.container}>
      <View style={health.top}>
        <Text style={health.title}>Записи</Text>
      </View>
      <View style={health.body}>
        <TouchableOpacity style={health.button}>
          <Text style={health.buttonTitle}>Шагомер</Text>
          <SvgXml xml={pedometer} style={health.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={health.button}>
          <Text style={health.buttonTitle}>Счетчик воды</Text>
        </TouchableOpacity>
        <TouchableOpacity style={health.button}>
          <Text style={health.buttonTitle}>Напоминания о лекарствах</Text>
        </TouchableOpacity>
      </View>
      <Navigation navigation={navigation} params={params} active="health" />
    </SafeAreaView>
  );
};

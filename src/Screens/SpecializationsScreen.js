import React, { useState, useEffect } from "react";

import { home } from "../Styles/Home";
import { specializations } from "../Styles/Specializations";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import { SpecializationsList } from "../Components/Specializations/SpecializationsList";

import axios from "axios";
import { Navigation } from "../Components/Navigation";

export const SpecializationsScreen = ({ navigation, route }) => {
  const params = route.params;

  return (
    <SafeAreaView style={specializations.container}>
      <View style={home.searchBar}>
        <TextInput
          style={home.searchInput}
          placeholder="Врач, услуга, клиника..."
        />
      </View>
      <SpecializationsList navigation={navigation} />
      <Navigation navigation={navigation} params={params} active="main" />
    </SafeAreaView>
  );
};

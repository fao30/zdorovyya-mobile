import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { clinics } from "../../Styles/Clinics";
import { ProgressBar } from "react-native-paper";
import { starPressed, starUnPressed, callIcon } from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";
import { SvgXml } from "react-native-svg";
import { ReviewStarts } from "./ReviewStarts";

export const TestimonialLists = ({ data }) => {
  return (
    <ScrollView
      style={{ paddingVertical: 10, height: 250, marginTop: 10 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((e) => {
        return (
          <View style={clinics.testimonialBoxShow}>
            {/* ini boxnya */}
            <View style={clinics.testimonialBoxShowTile}>
              <View style={{ width: "90%" }}>
                <Text style={{ fontWeight: "bold" }}>{e.name}</Text>
              </View>
              <Text style={{ color: "black" }}>{e.date}</Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <ReviewStarts stars={e.stars} />
            </View>
            <Text style={{ color: "black" }}>{e.message}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

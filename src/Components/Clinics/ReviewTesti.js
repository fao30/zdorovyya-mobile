import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { clinics } from "../../Styles/Clinics";
import { ProgressBar } from "react-native-paper";
import {
  starFilled,
  starOutlined,
  starFilledOrange,
} from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";

export const ReviewTesti = ({ data }) => {
  let sum = 0;
  data.forEach((element) => {
    sum += element;
  });
  return (
    <View style={clinics.gapTestimonial}>
      {data.map((e) => {
        return (
          <View style={clinics.testimonialBar}>
            <View style={clinics.testimonialTextView}>
              <Text style={clinics.testimonialText}>{e}</Text>
            </View>
            <View style={clinics.testimonialBarView}>
              <ProgressBar
                progress={((e / sum) * 100).toFixed() / 100}
                color={"orange"}
                style={{ marginTop: 5 }}
                height={10}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

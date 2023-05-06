import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { clinics } from "../../Styles/Clinics";
import { SvgXml } from "react-native-svg";
import {
  starFilled,
  starOutlined,
  starFilledOrange,
} from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";

export const ReviewStarts = ({ stars, isOrange }) => {
  const limit = [1, 2, 3, 4, 5];

  return (
    <View style={clinics.gapReviews}>
      {limit.map((e, i) => {
        if (e <= stars) {
          return (
            <SvgXml key={i} xml={isOrange ? starFilledOrange : starFilled} />
          );
        }
        return <SvgXml key={i} xml={starOutlined} />;
      })}
    </View>
  );
};

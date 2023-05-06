import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { clinics } from "../../Styles/Clinics";
import { ProgressBar } from "react-native-paper";
import { starPressed, starUnPressed, callIcon } from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";
import { SvgXml } from "react-native-svg";

export const ReviewStarBoxes = ({ data }) => {
  const reviewBoxes = ["Все", "5", "4", "3", "2", "1"];
  const [value, setValue] = useState("3");
  return (
    <View style={clinics.boxTexstimonialGap}>
      {reviewBoxes.map((e, i) => {
        const starPressedShow = e === value ? starPressed : starUnPressed;
        const boxColorShow =
          e !== value
            ? clinics.reviewBox
            : { ...clinics.reviewBox, backgroundColor: "#3989FA" };
        const boxColorTextShow =
          e === value ? { color: "#ffffff" } : { color: "black" };
        return (
          <Pressable
            key={i}
            onPress={() => {
              setValue(e);
            }}
          >
            <View>
              <View style={boxColorShow}>
                <Text style={boxColorTextShow}>{e}</Text>
                {i !== 0 ? (
                  <View style={clinics.star}>
                    <SvgXml xml={starPressedShow} />
                  </View>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

import React from "react";
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
} from "react-native";
import { SvgXml } from "react-native-svg";
import { navstyle } from "../Styles/Navigation";
import {
  home,
  sales,
  orders,
  health,
  profile,
  homeActive,
  salesActive,
  ordersActive,
  healthActive,
  profileActive,
} from "../Icons/Navigation";

export const Navigation = (props) => {
  return (
    <View style={navstyle.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Main", props.params);
        }}
        style={props.active == "main" ? navstyle.buttonActive : navstyle.button}
      >
        <SvgXml xml={props.active == "main" ? homeActive : home} />
        <Text
          style={props.active == "main" ? navstyle.textActive : navstyle.text}
        >
          Главная
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Sales", props.params);
        }}
        style={
          props.active == "sales" ? navstyle.buttonActive : navstyle.button
        }
      >
        <SvgXml xml={props.active == "sales" ? salesActive : sales} />
        <Text
          style={props.active == "sales" ? navstyle.textActive : navstyle.text}
        >
          Акции
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Orders", props.params);
        }}
        style={
          props.active == "orders" ? navstyle.buttonActive : navstyle.button
        }
      >
        <SvgXml xml={props.active == "orders" ? ordersActive : orders} />
        <Text
          style={props.active == "orders" ? navstyle.textActive : navstyle.text}
        >
          Записи
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Health", props.params);
        }}
        style={
          props.active == "health" ? navstyle.buttonActive : navstyle.button
        }
      >
        <SvgXml xml={props.active == "health" ? healthActive : health} />
        <Text
          style={props.active == "health" ? navstyle.textActive : navstyle.text}
        >
          Мое здоровье
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Profile", props.params);
        }}
        style={
          props.active == "profile" ? navstyle.buttonActive : navstyle.button
        }
      >
        <SvgXml xml={props.active == "profile" ? profileActive : profile} />
        <Text
          style={
            props.active == "profile" ? navstyle.textActive : navstyle.text
          }
        >
          Профиль
        </Text>
      </TouchableOpacity>
    </View>
  );
};

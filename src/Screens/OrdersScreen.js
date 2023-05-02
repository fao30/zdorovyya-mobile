import React, { useCallback } from "react";
import { TouchableOpacity, Text, View, SafeAreaView } from "react-native";
import { SvgUri } from "react-native-svg";
import { orders } from "../Styles/Orders";
import { home } from "../Styles/Home";
import { MaskedTextInput } from "react-native-mask-text";
import { Navigation } from "../Components/Navigation";
import { Iconsnav } from "../Components/IconsNav";
import { OrdersList } from "../Components/Orders/OrdersList";

export const OrdersScreen = ({ navigation, route }) => {
  const params = route.params;
  const requestBody = `phone={79178605317}`;

  return (
    <SafeAreaView style={orders.container}>
      <View style={orders.top}>
        <Text style={orders.title}>Записи</Text>
      </View>
      <View style={orders.tags}>
        <TouchableOpacity style={orders.tag}>
          <Text>Ближайшие</Text>
        </TouchableOpacity>
        <TouchableOpacity style={orders.tag}>
          <Text>Прошедшие</Text>
        </TouchableOpacity>
      </View>
      {/* NOTES: NO ACTION */}
      <OrdersList />
      <Navigation navigation={navigation} params={params} active="orders" />
    </SafeAreaView>
  );
};

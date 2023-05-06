import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { home } from "../../Styles/Home";
import { hideIcon, expandIcon } from "../../Icons/HideExpand";
import { SvgXml } from "react-native-svg";

function Orders({ orders }) {
  const Item = ({ id, time, date, doctor, clinic, doctorname, address }) => {
    const [isExpand, setIsexpand] = useState(false);

    return (
      <TouchableOpacity
        style={home.orderItem}
        key={id}
        onPress={() => {
          setIsexpand(isExpand ? false : true);
        }}
      >
        <View style={home.row}>
          <Text style={home.orderTitle}>
            {time} {date}, {doctor}
          </Text>
          <View>
            <SvgXml xml={isExpand ? expandIcon : hideIcon} />
          </View>
        </View>
        <Text style={home.orderInfo}>
          {clinic}, {doctorname}
        </Text>
        <Text style={home.orderInfo}>{address}</Text>
        {isExpand && (
          <View style={home.bottomButtons}>
            <TouchableOpacity>
              <View style={home.anotherTime}>
                <Text style={home.anotherTimeTitle}>Другое время</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("BAWAH");
              }}
            >
              <View style={home.cancelButton}>
                <Text style={home.cancelButtonTitle}>Отменить</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return orders.map((order, index) => {
    return (
      <Item
        key={index}
        id={order.id}
        time={order.time}
        date={order.date}
        doctor={order.doctor}
        clinic={order.clinic}
        doctorname={order.doctorname}
        address={order.address}
      />
    );
  });
}

export const OrdersList = () => {
  const [token, setToken] = React.useState("");
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

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

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `https://app.aaccent.su/health/api/feed/orders.php?token=${token}`;
    // NOTES: RETURN NULL
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        if (response.status === 200) {
          setOrders(response.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Data fetching cancelled==>>>> order1");
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchOrders();
    return () => source.cancel("Data fetching cancelled====>>> order 2");
  }, [token]);
  return (
    <View style={home.feed}>
      {!isLoading && !hasError && (
        <Orders
          orders={[
            {
              id: "1",
              date: "2023-01-02",
              time: "21:22",
              doctor: "Syeikh",
              clinic: "Doctor Syeikh",
              doctorname: "Syeikh",
              address: "Kazan",
            },
            {
              id: "2",
              date: "2023-01-02",
              time: "21:22",
              doctor: "Soke",
              clinic: "Doctor Man",
              doctorname: "Syeikh",
              address: "Kazan",
            },
          ]}
        />
      )}

      {isLoading && <Text> Загрузка данных </Text>}
    </View>
  );
};

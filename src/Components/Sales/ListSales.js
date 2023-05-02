import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { home } from "../../Styles/Home";
import { SvgUri } from "react-native-svg";

function Sales({ sales }) {
  const Item = ({ id, title, icon }) => (
    <TouchableOpacity style={home.saleLine} key={id}>
      <SvgUri uri={icon} style={home.saleLineLogo} />
      <View>
        <Text style={home.saleLineTitle}>{title}</Text>
        <Text style={home.saleLineMore}>Подробнее</Text>
      </View>
    </TouchableOpacity>
  );

  return sales.map((sale) => {
    return <Item id={sale.id} title={sale.title} icon={sale.icon} />;
  });
}

export const ListSales = () => {
  const [sales, setSales] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = React.useState("");
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `https://app.aaccent.su/healthyme/getsales.php`;
    const fetchSales = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        if (response.status === 200) {
          setSales(response.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Data fetching cancelled=>>>> salses");
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchSales();
    return () => source.cancel("Data fetching cancelled=>>>>>> sales 2");
  }, [token]);

  return (
    <ScrollView
      style={home.salesVertical}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {!isLoading && !hasError && sales && <Sales sales={sales} />}

      {isLoading && <Text> Загрузка данных </Text>}
    </ScrollView>
  );
};

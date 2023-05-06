import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { clinics } from "../../Styles/Clinics";
import { SvgXml } from "react-native-svg";
import { hideIcon, expandIcon } from "../../Icons/HideExpand";
import { favButton, favButtonClicked } from "../../Icons/Specializations";
import { DateLists } from "./DateLists";
import { TimeLists } from "./TimeLists";
import { ReviewStarts } from "./ReviewStarts";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";

function Clinics({ clinicsData, navigation }) {
  const Item = ({ id, time, date, doctor, clinic, doctorname, address }) => {
    const [isExpand, setIsexpand] = useState(false);
    const [fav, setFav] = useState(false);

    return (
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Clinic", {
              name: "Клиника Нуриевыхaaaaa",
              about: "Частная, принимает взрослых и детей",
              contact: "+7 (843) 343 34 34",
              address: "Ул. Чуйкова 32",
              metro: "Козья слобода (700м)",
              reviews: "19 отзывов",
              star: "4",
              startingPrice: "1290",
            });
          }}
        >
          <View style={clinics.clinicCard}>
            <View style={clinics.avatar}>
              <Image
                source={{
                  uri: "https://app.aaccent.su/health/resource/clinic.png",
                }}
                style={clinics.clinicsImage}
              />
              <Pressable onPress={() => setFav(!fav)} style={clinics.fav}>
                <View>
                  <SvgXml xml={fav ? favButtonClicked : favButton} />
                </View>
              </Pressable>
            </View>
            <View style={clinics.clinicInfo}>
              <View style={{ gap: 6 }}>
                <Text style={clinics.name}>Man Clinic</Text>
                <Text style={clinics.count}>В Казани: 3 клиники</Text>
                <View style={clinics.review}>
                  <ReviewStarts stars={3} />
                  <Text style={clinics.countTestimonies}>(12 отзывов)</Text>
                </View>
              </View>

              <Text style={clinics.price}>От 1290Р</Text>
            </View>
          </View>
        </Pressable>
        <View style={clinics.clinicContact}>
          <Text style={clinics.contact}>+7 (854) 204 13 34</Text>
          <Text style={clinics.contactCall}>Позвонить</Text>
        </View>
        <View style={clinics.chooseAddress}>
          <TouchableOpacity
            style={clinics.orderItem}
            // key={id}
            onPress={() => {
              setIsexpand(isExpand ? false : true);
            }}
          >
            <View style={clinics.row}>
              <Text style={clinics.addressTitle}>Выбрать адрес</Text>
              <View>
                <SvgXml xml={isExpand ? expandIcon : hideIcon} />
              </View>
            </View>
            <Text style={clinics.address}>Улица Сибгата Хакима, д56</Text>
          </TouchableOpacity>
        </View>
        <View style={clinics.chooseAddress}>{/* <DateLists /> */}</View>
        <View style={clinics.chooseAddress}>
          {/* <TimeLists
            navigation={navigation}
            timeLists={["12:20", "14:20", "20:30", "20:20", "12:20", "12:20"]}
          /> */}
        </View>
      </View>
    );
  };
  return clinicsData?.map((clinic) => {
    return (
      <Item
        id={clinic.id}
        time={clinic.time}
        date={clinic.date}
        doctor={clinic.doctor}
        clinic={clinic.clinic}
        doctorname={clinic.doctorname}
        address={clinic.address}
      />
    );
  });
}

export const ClinicLists = ({ navigation }) => {
  // const [token, setToken] = React.useState("");
  // const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("@token");
  //       if (value !== null) {
  //         setToken(value);
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };
  //   getData();

  //   useEffect(() => {
  //     const source = axios.CancelToken.source();
  //     const url = `https://app.aaccent.su/health/api/feed/orders.php?token=${token}`;
  //     // NOTES: RETURN NULL
  //     const fetchOrders = async () => {
  //       try {
  //         setIsLoading(true);
  //         const response = await axios.get(url, { cancelToken: source.token });
  //         if (response.status === 200) {
  //           setOrders(response.data);
  //           setIsLoading(false);
  //           return;
  //         } else {
  //           throw new Error("Failed to fetch users");
  //         }
  //       } catch (error) {
  //         if (axios.isCancel(error)) {
  //           console.log("Data fetching cancelled==>>>> order1");
  //         } else {
  //           setErrorFlag(true);
  //           setIsLoading(false);
  //         }
  //       }
  //     };
  //     fetchOrders();
  //     return () => source.cancel("Data fetching cancelled====>>> order 2");
  //   }, [token]);
  return (
    <SafeAreaView style={clinics.clinicListStyle}>
      <ScrollView>
        {!isLoading && !hasError && (
          <Clinics
            navigation={navigation}
            clinicsData={[
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
                doctorname: "Bro",
                address: "Kazan",
              },
              {
                id: "3",
                date: "2023-01-02",
                time: "21:22",
                doctor: "Soke",
                clinic: "Doctor Man",
                doctorname: "Bro",
                address: "Kazan",
              },
              {
                id: "4",
                date: "2023-01-02",
                time: "21:22",
                doctor: "Soke",
                clinic: "Doctor Man",
                doctorname: "Bro",
                address: "Kazan",
              },
            ]}
          />
        )}
      </ScrollView>

      {isLoading && <Text> Загрузка данных </Text>}
    </SafeAreaView>
  );
};

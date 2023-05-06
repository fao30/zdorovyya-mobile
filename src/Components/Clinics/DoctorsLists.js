import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { clinics } from "../../Styles/Clinics";
import { SvgXml } from "react-native-svg";
import {
  hideIcon,
  expandIcon,
  doctorIcon,
  discountIcon,
} from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";
import { DateLists } from "./DateLists";
import { TimeLists } from "./TimeLists";
import { ReviewStarts } from "./ReviewStarts";
import { Navigation } from "../Navigation";

function Doctors({ clinicsData, navigation }) {
  const Item = ({ id, time, date, doctor, clinic, doctorname, address }) => {
    const [isExpand, setIsexpand] = useState(false);

    return (
      <View style={clinic.containerDoctors}>
        <View style={clinics.doctorsBox}>
          <View>
            <View>
              <SvgXml xml={doctorIcon} />
            </View>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("DoctorDetail", {
                name: "",
                about: "",
                contact: "",
                address: "",
                metro: "",
                reviews: "",
                star: "",
                startingPrice: "",
              });
            }}
          >
            <View>
              <View>
                <Text style={clinics.doctorName}>
                  Каштанов Григорий Сергеевич
                </Text>
              </View>
              <View style={clinics.doctorCategory}>
                <Text style={clinics.doctorCategory}>Высшая категория</Text>
              </View>
              <View style={clinics.doctorCategory}>
                <Text style={clinics.doctorCategory}>Стаж 12 лет</Text>
              </View>
              <View style={clinics.reviewShowDoctor}>
                <View style={{ paddingTop: 5 }}>
                  <ReviewStarts stars={5}></ReviewStarts>
                </View>
                <Text>(12 отзывов)</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            gap: 10,
            paddingHorizontal: 24,
          }}
        >
          <Text>От 1290Р</Text>
          <Text>
            {"2290Р"
              .split("")
              .map((char) => char + "\u0336")
              .join("")}
          </Text>
          <View>
            <SvgXml xml={discountIcon} />
          </View>
        </View>
        <View style={clinics.clinicContactDoctors}>
          <Text style={clinics.contact}>+7 (854) 204 13 34</Text>
          <Text style={clinics.contactCall}>Позвонить</Text>
        </View>
        <View style={clinics.doctorsAddresses}>
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
          <TimeLists
            navigation={navigation}
            timeLists={["12:20", "14:20", "20:30", "20:20", "12:20", "12:20"]}
          />
        </View>
      </View>
    );
  };
  return clinicsData?.map((clinic, i) => {
    return (
      <Item
        id={clinic.id}
        time={clinic.time}
        date={clinic.date}
        doctor={clinic.doctor}
        clinic={clinic.clinic}
        doctorname={clinic.doctorname}
        address={clinic.address}
        name={clinic.name}
      />
    );
  });
}

export const DoctorsLists = ({ navigation }) => {
  const [token, setToken] = React.useState("");
  const [orders, setOrders] = React.useState([]);
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
    <SafeAreaView style={clinics.doctorListStyle}>
      <ScrollView>
        {!isLoading && !hasError && (
          <Doctors
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
                name: "Каштанов Григорий Сергеевич",
                category: "Высшая категория",
                serviceTerm: "Стаж 12 лет",
              },
              {
                id: "2",
                date: "2023-01-02",
                time: "21:22",
                doctor: "Syeikh",
                clinic: "Doctor Syeikh",
                doctorname: "Syeikh",
                address: "Kazan",
                name: "Каштанов Григорий Сергеевич",
                category: "Высшая категория",
                serviceTerm: "Стаж 12 лет",
              },
            ]}
          />
        )}
      </ScrollView>

      {isLoading && <Text> Загрузка данных </Text>}
    </SafeAreaView>
  );
};

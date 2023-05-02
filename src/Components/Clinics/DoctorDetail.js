import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
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
import { DoctorTab } from "./DoctorTabs";
import { ReviewClinic } from "./ReviewClinics";
import { Navigation } from "../Navigation";
import { ReviewDoctor } from "./ReviewDoctor";
import { AboutClinic } from "./AboutClinic";
import { AppointmentDoctor } from "./AppointmentDoctor";
import { AboutDoctor } from "./AboutDoctor";

export const DoctorDetail = ({ navigation, route }) => {
  const [token, setToken] = React.useState("");
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);
  const [tabChoosen, setTabChoosen] = useState(0);
  const params = route.params;

  // const { name, about, contact, address, metro, reviews, star, startingPrice } =
  //   params;

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
    <View>
      {!isLoading && !hasError && (
        <SafeAreaView style={clinics.container}>
          <View>
            <View style={clinics.clinicCard}>
              <View style={clinics.avatarDetail}>
                <ImageBackground
                  source={{
                    uri: "https://app.aaccent.su/health/resource/clinic.png",
                  }}
                  resizeMode="cover"
                  style={clinics.clinicsImageDetail}
                >
                  <View>
                    <SvgXml xml={favButton} />
                  </View>
                  <View style={clinics.reviewPad}>
                    <ReviewStarts stars={4}></ReviewStarts>
                    <Text style={clinics.tabText}>{"19 отзывов"}</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={clinics.clinicContact}>
              <Text style={clinics.clinicName}>
                {"Гараев Владислав Мухаммедович"}
              </Text>
            </View>
            <View style={clinics.clinicContact}>
              <Text style={clinics.clinicCountBranch}>Высшая категория</Text>
              {/* <Text style={clinics.contact}>От {"1202"}Р</Text> */}
            </View>
            <View style={clinics.clinicContact}>
              <Text style={clinics.clinicCountBranch}>Стаж 12 лет</Text>
              <Text style={clinics.contact}>От {"1202"}Р</Text>
            </View>

            <DoctorTab
              tabClick={(e) => {
                setTabChoosen(e);
              }}
            />
            {tabChoosen === 0 ? (
              <AppointmentDoctor navigation={navigation} data={params} />
            ) : (
              <></>
            )}
            {tabChoosen === 1 ? (
              <AboutDoctor navigation={navigation} data={params} />
            ) : (
              <></>
            )}
            {tabChoosen === 2 ? (
              <ReviewDoctor navigation={navigation} data={params} />
            ) : (
              <></>
            )}
          </View>
          <Navigation navigation={navigation} params={params} active="main" />
        </SafeAreaView>
      )}

      {isLoading && <Text> Загрузка данных </Text>}
    </View>
  );
};

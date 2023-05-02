import React, { useState, useEffect } from "react";
import { FlatList, Text, View, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { home } from "../../Styles/Home";
import { specializations } from "../../Styles/Specializations";
import { API_URL, SPECIALIZATIONS_METHOD } from "../../Consts/API";

function Specializations({ specializationsObject, navigation }) {
  const Item = ({ id, name }) => (
    <Pressable
      style={specializations.button}
      onPress={() => {
        navigation.navigate("Clinics", { phone: "EJEJEJ" });
      }}
    >
      <Text style={specializations.text}>{name}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={specializationsObject}
      renderItem={({ item }) => <Item name={item.name} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export const SpecializationsList = ({ navigation, route }) => {
  const [userId, setUserId] = useState(1);
  const [specializationslist, setSpecialization] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${API_URL}${SPECIALIZATIONS_METHOD}`;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        if (response.status === 200) {
          setSpecialization(response.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Data fetching cancelled");
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  }, [userId]);

  return (
    <View style={specializations.list}>
      {/* {!isLoading && !hasError && specializationslist && (
        <Specializations
          specializationsObject={specializationslist}
          navigation={navigation}
        />
      )} */}

      <Specializations
        specializationsObject={[
          { id: "1", name: "Хирург" },
          { id: "2", name: "Психотерапевт" },
        ]}
        navigation={navigation}
      />

      {isLoading && <Text> Loading </Text>}
    </View>
  );
};

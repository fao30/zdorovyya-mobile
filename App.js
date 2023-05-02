import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "./src/Screens/AuthScreen";
import { SmscodeScreen } from "./src/Screens/SmscodeScreen";
import { Navigation } from "./src/Components/Navigation";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { SalesScreen } from "./src/Screens/SalesScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen";
import { OrdersScreen } from "./src/Screens/OrdersScreen";
import { HealthScreen } from "./src/Screens/HealthScreen";
import { SpecializationsScreen } from "./src/Screens/SpecializationsScreen";
import { getHeaderTitle } from "@react-navigation/elements";
import { ClinicsScreen } from "./src/Screens/ClinicsScreen";
import { ClinicScreen } from "./src/Screens/ClinicScreen";
import { DoctorDetail } from "./src/Components/Clinics/DoctorDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{
            animationEnabled: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="SmsCode"
          component={SmscodeScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Sales"
          component={SalesScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Health"
          component={HealthScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Specializations"
          component={SpecializationsScreen}
          options={{
            animationEnabled: false,
            headerShown: true,
            title: "Выбор специализации",
            headerBackTitle: "Ba",
          }}
        />
        <Stack.Screen
          name="Clinics"
          component={ClinicsScreen}
          options={{
            animationEnabled: true,
            headerShown: true,
            title: "Выбор специализации",
            // headerBackTitle: "Ba",
          }}
        />
        <Stack.Screen
          name="Clinic"
          component={ClinicScreen}
          options={{
            animationEnabled: true,
            headerShown: true,
            title: "Карточка клиники",
            // headerBackTitle: "Ba",
          }}
        />
        <Stack.Screen
          name="DoctorDetail"
          component={DoctorDetail}
          options={{
            animationEnabled: true,
            headerShown: true,
            title: "Карточка врача",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

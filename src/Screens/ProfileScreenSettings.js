import {
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Keyboard,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

// Components
import { Navigation } from "../Components/Navigation";

// Styles
import { universal } from "../Styles/Universal";
import { profileSettings } from "../Styles/ProfileSettings";

// Miscellaneous
import { arrowBack } from "../Icons/Navigation";
import {
  starIcon,
  notifIcon,
  notifPushIcon,
  changePasswordIcon,
  exitProfile,
} from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

const data = [
  {
    icon: notifPushIcon,
    label: "Push уведомления",
  },
  {
    icon: changePasswordIcon,
    label: "Сменить пароль",
  },
  {
    icon: exitProfile,
    label: "Выйти из профиля",
  },
];

export const ProfileScreenSettings = ({ navigation, route }) => {
  const params = route.params;

  return (
    <SafeAreaView style={universal.container}>
      <View style={universal.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <SvgXml xml={arrowBack} />
          </Pressable>
          <Text style={universal.headerFont}>Настройки</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <SvgXml xml={starIcon} />
          <SvgXml xml={notifIcon} />
        </View>
      </View>
      <ScrollView>
        {data.map((props, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginHorizontal: 24,
              paddingTop: 34,
              paddingBottom: 15,
              borderBottomWidth: 1.5,
              borderBottomColor: "#FFA800",
            }}
          >
            <SvgXml xml={props.icon} />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "700",
              }}
            >
              {props.label}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Navigation navigation={navigation} params={params} active="profile" />
    </SafeAreaView>
  );
};

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
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Pressable,
} from "react-native";

// Styles
import { universal } from "../Styles/Universal";
import { profileFamily } from "../Styles/ProfileFamily";

// Miscellaneous
import { arrowBack } from "../Icons/Navigation";
import { addProfileIcon } from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

// Components
import { Navigation } from "../Components/Navigation";

export const ProfileScreenFamily = ({ navigation, route }) => {
  const params = route.params;

  return (
    <SafeAreaView style={universal.container}>
      <View style={universal.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <SvgXml xml={arrowBack} />
          </Pressable>
          <Text style={universal.headerFont}>Моя семья</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <SvgXml xml={addProfileIcon} />
        </View>
      </View>
      <View style={profileFamily.content}>
        <Image source={require("../../assets/image-family.png")} />
        <Text style={profileFamily.contentText}>
          Здесь будут данные о ваших {"\n"} близких
        </Text>
      </View>
      <Navigation navigation={navigation} params={params} active="profile" />
    </SafeAreaView>
  );
};

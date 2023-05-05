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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";
import { expandIcon, hideIcon } from "../Icons/HideExpand";
import { closeIcon, tickIcon } from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

// Styles
import { universal } from "../Styles/Universal";
import { profileEdit } from "../Styles/ProfileEdit";

// components
import Input from "../Components/Input";
import { RadioButtonComponent } from "../Components/RadioButtonComponent";
import { Navigation } from "../Components/Navigation";

import InputFields from "../Components/Profile/InputFields";
import { useRoute } from "@react-navigation/native";

export const ProfileScreenEdit = ({ navigation, route }) => {
  const params = route.params;

  const ScreenName = route.name;
  console.log(">>>>", ScreenName);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={profileEdit.container}>
        <View style={profileEdit.header}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <SvgXml xml={closeIcon} style={profileEdit.title} />
            </Pressable>
            <Text style={universal.headerFont}>
              {ScreenName === "Profile Edit" && "Профиль"}
              {ScreenName === "Profile Family Add" && "Моя семья"}
            </Text>
          </View>
          <View style={profileEdit.title}>
            <Pressable onPress={Keyboard.dismiss}>
              <SvgXml xml={tickIcon} />
            </Pressable>
          </View>
        </View>
        <KeyboardAwareScrollView
          extraScrollHeight={100}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <InputFields />
        </KeyboardAwareScrollView>
        <Navigation navigation={navigation} params={params} active="profile" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

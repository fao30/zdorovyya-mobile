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
import { profileEdit } from "../Styles/ProfileEdit";
import { expandIcon, hideIcon } from "../Icons/HideExpand";
import { closeIcon, tickIcon } from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

// components
import Input from "../Components/Input";
import { RadioButtonComponent } from "../Components/RadioButtonComponent";
import { Navigation } from "../Components/Navigation";

export const ProfileEditScreen = ({ navigation, route }) => {
  const params = route.params;

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
            <Text style={profileEdit.title}>Профиль</Text>
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
          <ScrollView>
            <View style={profileEdit.inputContainer}>
              <Input label="Фамилия" />
              <Input label="Имя" />
              <Input label="Отчество" />
            </View>
            <View style={profileEdit.radioButtonContainer}>
              <Text style={[profileEdit.labelInput]}>Пол</Text>
              <View style={profileEdit.radioButtonContainerInside}>
                <View style={profileEdit.radioButton}>
                  <RadioButtonComponent
                    label="Женский"
                    color="#3989FA"
                    status="checked"
                  />
                  <RadioButtonComponent
                    label="Мужской"
                    color="#3989FA"
                    status="checked"
                  />
                </View>
              </View>
            </View>
            <View style={profileEdit.inputContainer}>
              <Input label="Дата рождения" />
              <Input label="Телефон" />
              <Input label="Email" />
            </View>
            <View style={profileEdit.inputContainer}>
              <Text style={profileEdit.dataPassport}>Паспортные данные</Text>
              <Input label="Серия" />
              <Input label="Номер" />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <Navigation navigation={navigation} params={params} active="profile" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

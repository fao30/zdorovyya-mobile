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

// Components
import Input from "../Input";
import { RadioButtonComponent } from "../RadioButtonComponent";

// Styles
import { universal } from "../../Styles/Universal";
import { profileEdit } from "../../Styles/ProfileEdit";

const InputFields = () => {
  return (
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
  );
};

export default InputFields;

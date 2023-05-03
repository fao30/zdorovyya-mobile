import React, { useCallback } from "react";
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
} from "react-native";
import { SvgXml } from "react-native-svg";
import { profile } from "../Styles/Profile";
import { MaskedTextInput } from "react-native-mask-text";
import { Navigation } from "../Components/Navigation";
import { Iconsnav } from "../Components/IconsNav";
import {
  profileIcon,
  historyIcon,
  familyIcon,
  documentsIcon,
  settingsIcon,
  favoriteIcon,
} from "../Icons/Profile";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Text style={{ fontSize: 10, color: "#3989FA", marginBottom: 8 }}>
        {children}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export const ProfileScreen = ({ navigation, route }) => {
  const params = route.params;

  return (
    <SafeAreaView style={profile.container}>
      <View style={profile.top}>
        <TouchableWithoutFeedback style={profile.profilePhoto}>
          <View style={profile.editLink}>
            <View style={profile.photoCircle}>
              <SvgXml xml={profileIcon} style={profile.placeholderPhoto} />
            </View>

            <Text style={profile.phone}>+7 999 888 77 66</Text>
            <Text style={profile.link}>Редактировать</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={profile.body}>
        <TouchableWithoutFeedback style={profile.settingLink}>
          <View style={profile.settingLine}>
            <SvgXml xml={historyIcon} style={profile.settingIcons} />
            <Text style={profile.settingText}>История записей</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={profile.settingLink}>
          <View style={profile.settingLine}>
            <SvgXml xml={familyIcon} style={profile.settingIcons} />
            <Text style={profile.settingText}>Моя семья</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={profile.settingLink}>
          <View style={profile.settingLine}>
            <SvgXml xml={documentsIcon} style={profile.settingIcons} />
            <Text style={profile.settingText}>Документы</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={profile.settingLink}
          onPress={() => {
            navigation.navigate("Profile Settings");
          }}
        >
          <View style={profile.settingLine}>
            <SvgXml xml={settingsIcon} style={profile.settingIcons} />
            <Text style={profile.settingText}>Настройки</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={profile.settingLink}>
          <View style={profile.settingLine}>
            <SvgXml xml={favoriteIcon} style={profile.settingIcons} />
            <Text style={profile.settingText}>Избранное</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={profile.footer}>
        <OpenURLButton url="https://ya.ru/">
          Политика конфиденциальности
        </OpenURLButton>
        <OpenURLButton url="https://ya.ru/">
          Пользовательское соглашение
        </OpenURLButton>
        <Text style={profile.copyright}>Версия приложения 0.1.0</Text>
      </View>
      <Navigation navigation={navigation} params={params} active="profile" />
    </SafeAreaView>
  );
};

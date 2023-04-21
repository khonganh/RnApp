import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenName } from "../../constants/ScreenName";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { AccessToken, LoginManager, Settings } from "react-native-fbsdk-next";
import { FBAppID } from "~/constants/general";

const LoginScreen = () => {
  const navigation = useNavigation();

  async function loginGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const { accessToken } = await GoogleSignin.getTokens();
      console.log("accessToken", accessToken);
      return accessToken;
    } catch (err) {
      console.log("err", err);
      return null;
    }
  }

  async function loginFacebook() {
    try {
      Settings.setAppID(FBAppID);
      let result;
      try {
        LoginManager.setLoginBehavior(
          Platform.OS === "ios" ? "native_only" : "web_only"
        );
        result = await LoginManager.logInWithPermissions(
          ["public_profile", "email"],
          "limited",
          "my_nonce"
        );
        console.log("result", result);
      } catch (err) {
        console.log("err", err);
        // LoginManager.setLoginBehavior("web_only");
        // result = await LoginManager.logInWithReadPermissions([
        //   "public_profile",
        //   "email",
        // ]);
      }
      if (result.isCancelled) {
        return null;
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        return null;
      }
      return data.accessToken;
    } catch (err) {
      console.log("err", err);
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={loginGoogle}
      />
      <Button
        onPress={loginFacebook}
        title="Login FB"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

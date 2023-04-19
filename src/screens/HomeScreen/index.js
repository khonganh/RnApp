import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenName} from '../../constants/ScreenName';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Animation Screen"
        color="#f194ff"
        onPress={() => navigation.navigate(ScreenName.ANIMATION_SCREEN)}
      />
      <Button
        title="Pan Responder"
        color="#315263"
        onPress={() => navigation.navigate(ScreenName.PAN_RESPONDER_SCREEN)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

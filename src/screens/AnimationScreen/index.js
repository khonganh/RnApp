import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';

const AnimationScreen = () => {
  const animatedValueBox1 = useRef(
    new Animated.ValueXY({x: 10, y: 10}),
  ).current;
  const animatedValueBox2 = useRef(
    new Animated.ValueXY({x: 10, y: 10}),
  ).current;

  useEffect(() => {
    Animated.timing(animatedValueBox1, {
      toValue: {x: 200, y: -200},
      duration: 3000,
      easing: Easing.linear(Easing.bounce),
      useNativeDriver: false,
    }).start();
  }, [animatedValueBox1]);

  useEffect(() => {
    Animated.timing(animatedValueBox2, {
      toValue: {x: 200, y: 400},
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [animatedValueBox2]);

  return (
    <View style={styles.container}>
      {/* <Text>AnimationScreen!</Text> */}
      <Animated.View
        style={[
          styles.box,
          {marginLeft: animatedValueBox1.x, marginTop: animatedValueBox1.y},
        ]}
      />
      {/* <Animated.View
        style={[
          styles.box2,
          {marginLeft: animatedValueBox2.x, marginTop: animatedValueBox2.y},
        ]}
      /> */}
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    marginBottom: 10,
  },
});

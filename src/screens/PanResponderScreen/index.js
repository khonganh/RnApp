import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';

const PanResponderScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const animatedValue = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animatedValue.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > windowWidth * 0.25) {
          swipeRight();
        } else if (gesture.dx < -windowWidth * 0.25) {
          swipeLeft();
        } else {
          resetPosition();
        }
      },
    }),
  ).current;

  const swipeRight = () => {
    Animated.spring(animatedValue, {
      toValue: {
        x: windowWidth * 2,
        y: 0,
      },
      useNativeDriver: false,
    }).start(() => {
      animatedValue.setValue({x: 0, y: 0});
    });
  };

  const swipeLeft = () => {
    Animated.spring(animatedValue, {
      toValue: {
        x: -windowWidth * 2,
        y: 0,
      },
      useNativeDriver: false,
    }).start(() => {
      animatedValue.setValue({x: 0, y: 0});
    });
  };

  const resetPosition = () => {
    Animated.timing(animatedValue, {
      toValue: {
        x: 0,
        y: 0,
      },
      useNativeDriver: false,
    }).start();
  };

  const renderCard = () => {
    const cardAnimation = {
      transform: [
        {translateX: animatedValue.x},
        {
          translateY: animatedValue.y.interpolate({
            inputRange: [-windowHeight * 0.5, windowHeight * 0.5],
            outputRange: [-windowHeight * 0.5, windowHeight * 0.5],
            extrapolate: 'clamp',
          }),
        },
        {
          rotate: animatedValue.x.interpolate({
            inputRange: [-windowHeight * 1.5, windowHeight * 1.5],
            outputRange: ['-120deg', '120deg'],
          }),
        },
      ],
    };

    return (
      <Animated.View style={[styles.card, cardAnimation]}>
        <Animated.Image
          source={require('~/assets/images/lion.jpeg')}
          style={styles.image}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* <Text>PanResponderScreen!</Text> */}
      {renderCard()}
    </View>
  );
};

export default PanResponderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '70%',
    height: '70%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

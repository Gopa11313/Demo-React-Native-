import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a delay of 3 seconds
    const timer = setTimeout(() => {
      // Navigate to the dashboard screen after the delay
      navigation.replace('Dashboard'); // Use navigation.replace to prevent going back to the splash screen
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;

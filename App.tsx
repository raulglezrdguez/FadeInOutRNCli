/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useOnFocusFadeIn} from './src/hooks/useOnFocusFadeIn';

function HomeScreen({navigation}) {
  const {FadeIn, animatedStyle} = useOnFocusFadeIn();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeIn animatedStyle={animatedStyle}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </FadeIn>
    </View>
  );
}

function DetailsScreen({navigation}) {
  const {FadeIn, animatedStyle} = useOnFocusFadeIn();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeIn animatedStyle={animatedStyle}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </FadeIn>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

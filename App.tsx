import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native & Expo Demo</Text>
      <Text style={styles.text}>Made with ❤️ for Curvestone</Text>
      <View style={styles.row}>
        <Image source={require('./assets/cs.png')} style={styles.csLogo} />
        <Image source={require('./assets/react.png')} style={styles.rnLogo} />
      </View>

      <Text style={{ ...styles.text, marginTop: 100 }}>React Native has a lot to offer in terms of components, check out some of the defaults</Text>
      <Button title="Click MEEE" onPress={() => Linking.openURL('https://reactnative.dev/docs/button')} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Courier New'
  },
  text: {
    fontFamily: 'Courier New',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  csLogo: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  rnLogo: {
    width: 150,
    height: 150,
  }
});

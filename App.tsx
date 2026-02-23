import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World! how are you</Text>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod/images/mh-3-3-rocky-6402438d33545.png',
          }}
        />
        <Button title="Lets Go " />
      </View>
    </SafeAreaView>
  );
}

export default App;

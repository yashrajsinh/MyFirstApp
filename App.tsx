import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards/FlatCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text> Red </Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text> Green </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text> Blue </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text> Gray </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    width: '20%',
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});

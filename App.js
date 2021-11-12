import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
				style={styles.photo}
				source={{uri: 'http://placekitten.com/200/300'}}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	photo: {
		height: 250,
		width: 250,
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

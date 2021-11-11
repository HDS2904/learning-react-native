import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
			<SectionList
				sections={[
					{
						title: 'Grupo 1',
						data: [
							{key: '1', name: 'María'},
							{key: '2', name: 'Carlos'},
							{key: '3', name: 'Jonathan'},
							{key: '4', name: 'José'},
						]
					},
					{
						title: 'Grupo 2',
						data: [
							{key: '6', name: 'Ruso'},
							{key: '7', name: 'Angel'},
							{key: '8', name: 'Joel'},
							{key: '9', name: 'Sergio'},
						]
					},
					{
						title: 'Grupo 3',
						data: [
							{key: '10', name: 'Valentín'},
							{key: '11', name: 'Manuel'},
							{key: '12', name: 'Juan'},
							{key: '13', name: 'Joaquín'},
						]
					},
					{
						title: 'Grupo 4',
						data: [
							{key: '14', name: 'Steve'},
							{key: '15', name: 'Julio'},
							{key: '16', name: 'Lucía'},
							{key: '17', name: 'Cesar'},
							{key: '18', name: 'Monica'},
						]
					},
				]}
				renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
				renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
	item: {
		padding: 10,
		fontSize: 22,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	section: {
		fontSize: 20,
		backgroundColor: '#eee',
		fontWeight: 'bold',
		padding: 10
	}
});

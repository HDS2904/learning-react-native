import React, { useEffect, useState } from 'react';
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp => resp.json())
			.then(data => {
				setUsers(data);
				setLoading(false);
			})
	}, [])

  return (
    <View style={styles.container}>
			{ loading
				?<Text style={styles.center}>Loading...</Text>
				:<FlatList
					data={users}
					renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
					keyExtractor={item=>`${item.id}`}
				/>
			}
    </View>
  );
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
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
});

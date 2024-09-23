import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            style={styles.buttonPress} // Style for each Pressable
            onPress={() => alert(`${item.title} is Clicked.`)} // Alert the specific user's name
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonHome}>
          <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.buttonItems}>
          <Button title="Cars Page" onPress={() => navigation.navigate('Cars')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const data = [
  { id: '1', title: 'Smith' },
  { id: '2', title: 'John' },
  { id: '3', title: 'Sarah' },
  { id: '4', title: 'Ross' },
  { id: '5', title: 'Kate' },
  { id: '6', title: 'Jossy' },
  { id: '7', title: 'Pierre' },
  { id: '8', title: 'Katie' },
  { id: '9', title: 'Ross' },
  { id: '10', title: 'Sephy' },
  { id: '11', title: 'Kenan' },
  { id: '12', title: 'Treah' },
  { id: '13', title: 'Jack' },
  { id: '14', title: 'Gedeon' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  buttonPress: {
    backgroundColor: 'blue',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 10
  },
  itemText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  buttonHome: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'lightblue'
  },
  buttonItems: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'lightblue'
  }
});

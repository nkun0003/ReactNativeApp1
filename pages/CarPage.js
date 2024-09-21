import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function CarPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require('../assets/lux2.jpeg')}
            style={{
              borderColor: '#eee',
              borderWidth: 5,
              width: 380,
              height: 450
            }}
          />
          <Image
            source={require('../assets/Palisage.jpg')}
            style={{
              borderColor: '#eee',
              borderWidth: 5,
              width: 380,
              height: 450
            }}
          />

          <Image
            source={require('../assets/Lambo.jpeg')}
            style={{
              borderColor: '#eee',
              borderWidth: 5,
              width: 380,
              height: 450
            }}
          />

          <Image
            source={require('../assets/Lux.jpeg')}
            style={{
              borderColor: '#eee',
              borderWidth: 5,
              width: 380,
              height: 450
            }}
          />

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonHome}>
              <Button title="Home Page" onPress={() => navigation.navigate('Home')}></Button>
            </View>
            <View style={styles.buttonItems}>
              <Button title="Owners List" onPress={() => navigation.navigate('Owners')}></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
    // justifyContent: "center",
    // paddingTop: 48,
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

import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.buttonStyle}>
          <Text> Ross's First React Native App</Text>
          <View style={styles.buttonAbout}>
            <Button title="Cars Page" onPress={() => navigation.navigate('Cars')}></Button>
          </View>
          <View style={styles.buttonItems}>
            <Button title="Owners List" onPress={() => navigation.navigate('Owners')}></Button>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    // paddingTop: 48,
  },
  buttonStyle: {
    justifyContent: 'space-between',
    padding: 5,
    flexDirection: 'column',
    gap: 5
  },
  buttonAbout: {
    borderRadius: 10,
    backgroundColor: 'lightblue',
    padding: 5
  },
  buttonItems: {
    borderRadius: 10,
    backgroundColor: 'lightblue',
    padding: 5
  }
});

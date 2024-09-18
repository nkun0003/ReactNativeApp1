import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text> Ross's First React Native App</Text>
        <View style={styles.buttonAbout}>
          <Button title="About Page" onPress={() => navigation.navigate('About')}></Button>
        </View>
        <View style={styles.buttonItems}>
          <Button title="Items Page" onPress={() => navigation.navigate('Item')}></Button>
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
  buttonAbout: {
    padding: 5
  },
  buttonItems: {
    padding: 5
  }
});

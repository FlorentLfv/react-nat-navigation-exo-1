import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ImageIcon = () => {
  return (
    <Ionicons name="image" size={30}  />
  )
}

const TextIcon = () => {
  return (
    <Ionicons name="text" size={30}  />
  )
}

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/736x/1b/17/4e/1b174ef0ad95d628cba65ffe1216b1f9.jpg' }} style={styles.image} />
    </View>
  );
};

const TextScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Le chat.</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon:() => {
            let iconName;

            if(route.name == "Image"){
              iconName = "home"

            }else if( route.name == "Texte"){
              iconName = "image"
            }
            return<Ionicons name={iconName} color="red" size={30}  />
          }
        })}

        >
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Texte" component={TextScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
  }
});

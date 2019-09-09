import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AddEntry from './components/AddEntry'
import History from './components/History'
import Ionicons from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


const TabNavigator = createMaterialTopTabNavigator({
  History: History,
  'Add Entry': AddEntry
},

{
  defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ focused, horizontal, tintColor }) => {
       // const { routeName } = navigation.state;
       let IconComponent = Ionicons;
       let iconName;

       iconName = `ios-options`;

       // You can return any component that you like here!
       return <IconComponent name={iconName} size={25} color={tintColor} />;

       },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'lightgray',
    }
  }
);

export default createAppContainer(TabNavigator);

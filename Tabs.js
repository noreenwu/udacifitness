import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddEntry from './components/AddEntry'
import History from './components/History'
import Live from './components/Live'
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


const TabNavigator = createBottomTabNavigator({
  History: History,
  'Add Entry': AddEntry,
  Live: Live
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
      pressColor: 'green'
    },
    style: {
      backgroundColor: 'white'
    }
  }
);

export default createAppContainer(TabNavigator);

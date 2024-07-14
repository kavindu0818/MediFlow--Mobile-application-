import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

const imagePath = require('../../assets/logo2.png');
const imagePathMenu = require('../../assets/menuBar.png');
const imagePathMessge = require('../../assets/message.png');
const imagePathBell = require('../../assets/bell.png');
const imagePathUser = require('../../assets/userMobile.png');
const imagePathBlood = require('../../assets/blood.png');
const imagePathHeight = require('../../assets/height.png');
const imagePathHart = require('../../assets/hart.png');
const imagePathWeight = require('../../assets/weight.png');

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image source={imagePath} style={styles.logo} />
        <TouchableOpacity onPress={toggleSidebar}>
          <Image source={imagePathMenu} style={styles.menu} />
        </TouchableOpacity>
        <Image source={imagePathMessge} style={styles.msg} />
        <Image source={imagePathBell} style={styles.bell} />
        <Image source={imagePathUser} style={styles.user} />
      </View>

      <View style={styles.rectangle1}>
        <Image source={imagePathBlood} style={styles.logo1} />
      </View>
      <View style={styles.rectangle2}>
        <Image source={imagePathHeight} style={styles.logo1} />
      </View>
      <View style={styles.rectangle3}>
        <Image source={imagePathWeight} style={styles.logo1} />
      </View>
      <View style={styles.rectangle4}>
        <Image source={imagePathHart} style={styles.logo1} />
      </View>

      {isSidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Dash')}>
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('MyHealth')}>
            <Text style={styles.sidebarText}>My Health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Report')}>
            <Text style={styles.sidebarText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Doctor')}>
            <Text style={styles.sidebarText}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Order')}>
            <Text style={styles.sidebarText}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.sidebarText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('LogOut')}>
            <Text style={styles.sidebarText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
  },
  logo1: {
    position: 'absolute',
    top: 40,
    left: 10,
    width: 40,
    height: 40,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 90,
    width: 20,
    height: 20,
  },
  msg: {
    position: 'absolute',
    top: 20,
    left: 170,
    width: 20,
    height: 20,
  },
  bell: {
    position: 'absolute',
    top: 20,
    left: 240,
    width: 20,
    height: 20,
  },
  user: {
    position: 'absolute',
    top: 20,
    left: 300,
    width: 20,
    height: 20,
  },
  rectangle: {
    position: 'absolute',
    width: 350,
    height: 70,
    backgroundColor: '#b7ebe4',
    top: 5,
  },
  rectangle1: {
    position: 'absolute',
    width: 320,
    height: 120,
    backgroundColor: '#e3e8e5',
    top: 100,
  },
  rectangle2: {
    position: 'absolute',
    width: 320,
    height: 120,
    backgroundColor: '#e3e8e5',
    top: 230,
  },
  rectangle3: {
    position: 'absolute',
    width: 320,
    height: 120,
    backgroundColor: '#e3e8e5',
    top: 360,
  },
  rectangle4: {
    position: 'absolute',
    width: 320,
    height: 120,
    backgroundColor: '#e3e8e5',
    top: 490,
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    padding: 20,
    zIndex: 10, // Ensure the sidebar is on top
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyHealthScreen;

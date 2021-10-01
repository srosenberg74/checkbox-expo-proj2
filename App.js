import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';





export default function App() {

const [itemCount, setItemCount] = useState(2);
const [items, setItems] = useState({
  1: 'first item',
  2: 'second item',
});

function ListItem() {
  return (
  <View className="listItem" style={styles.checkboxContainer}>
  <MyCheckbox className="checkBox"/>
  <Text style={styles.checkboxLabel}>{items[1]}</Text>
</View>
  );

}

const 

function MyCheckbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    setItems(delete items[1]);
    setItemCount(itemCount-1);
    onChange(!checked);
    // onChange(delete);
    // delete document.getElementsByClassName('listItem');
    delete document.querySelectorAll('View.listItem')[0];
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Todo List</Text>
      <ListItem />


    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: 'coral',
  },

  appContainer: {
    flex: 1,
    alignItems: 'center',
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
    height: 60,
    border: '2px solid red',
    padding: 10,
    borderRadius: 10,
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});








// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

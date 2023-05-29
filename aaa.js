import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import firebase from 'firebase';

???????

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function HomeScreen({ navigation }) {
  const [button1Clicks, setButton1Clicks] = useState(0);

  useEffect(() => {
    const buttonRef = firebase.database().ref('cliques/button1');
    const listener = buttonRef.on('value', (snapshot) => {
      const clicks = snapshot.val() || 0;
      setButton1Clicks(clicks);
    });

  
    return () => {
      buttonRef.off('value', listener);
    };
  }, []);

  const handleButtonPress = () => {
    const buttonRef = firebase.database().ref('cliques/button1');
    buttonRef.transaction((currentClicks) => (currentClicks || 0) + 1);

    
  };

  const handleGoBack = () => {
     navigation.navigate('HomeScreen');
  };

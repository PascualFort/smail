import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MailForm from './MailForm';

const Main = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/smail_logo.png')}
        />
      </View>
      <View style={styles.container}>
        <MailForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FAEDCA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  logo: {
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  header: {
    marginBottom: 50,
  },
});

export default Main;

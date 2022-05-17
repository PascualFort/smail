import React, {useState} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import StyledInput from './StyledInput';
import {sendMail} from './MailPost';

const MailForm = () => {
  const [email, setEmail] = useState('');
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <StyledInput onChangeText={text => setEmail(text)} placeholder="Email" />
      <StyledInput
        onChangeText={text => setHeader(text)}
        sultiline={true}
        numberOfLines={2}
        placeholder="Header"
      />
      <StyledInput
        onChangeText={text => setContent(text)}
        placeholder="Content"
        multiline={true}
        numberOfLines={5}
      />
      <Button
        onPress={async () => {
          const response = await sendMail(email, header, content);
          console.log(response);
          if (response == 200) {
            Alert.alert('Email sent successfully');
          } else {
            Alert.alert('Email sending failed');
          }
        }}
        title="Send"
        color="#7EBC89"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    padding: 5,
  },
});

export default MailForm;

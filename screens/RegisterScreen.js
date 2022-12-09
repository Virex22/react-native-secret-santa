import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button/Button';
import ConfirmPassword from '../components/Forms/Input/ConfirmPassword';
import EmailInput from '../components/Forms/Input/EmailInput';
import PasswordInput from '../components/Forms/Input/PasswordInput';
import TextInput from '../components/Forms/Input/TextInput';
import Background from '../components/Template/Background';
import TouchableText from '../components/TouchableText/TouchableText';
import Colors from '../config/colors';
import {RegisterUser} from '../helper/authenticationHelper';

const RegisterScreen = ({navigation}) => {
  const [forms, setForms] = React.useState({
    pseudo: '',
    pseudoValid: false,
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    confirmValid: false,
  });

  async function onRegister() {
    if (
      forms.pseudoValid &&
      forms.emailValid &&
      forms.passwordValid &&
      forms.confirmValid
    ) {
      RegisterUser(forms.email, forms.password)
        .then(response => {
          Alert.alert(
            'Inscription réussie',
            'Vous pouvez maintenant vous connecter après avoir vérifié votre email',
            [{text: 'OK', onPress: () => navigation.navigate('Login')}],
          );
        })
        .catch(error => {
          console.log(error);
          Alert.alert(
            'Erreur',
            "Une erreur est survenue lors de l'inscription :" + error,
          );
        });
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.form}>
            <Image
              style={styles.image}
              source={require('../assets/img/Icon.png')}
            />
            <TextInput
              title="Pseudo :"
              placeholder="Pseudo"
              onChange={(text, isValid) =>
                setForms({...forms, pseudo: text, pseudoValid: isValid})
              }
              regex={/^[a-zA-Z0-9]{3,20}$/}
            />
            <EmailInput
              title="Email :"
              placeholder="exemple@email.com"
              onChange={(text, isValid) =>
                setForms({...forms, email: text, emailValid: isValid})
              }
            />
            <PasswordInput
              title="Password :"
              onChange={(text, isValid) =>
                setForms({...forms, password: text, passwordValid: isValid})
              }
            />
            <ConfirmPassword
              title="Confirm password :"
              matchText={forms.password}
              onChange={valid => setForms({...forms, confirmValid: valid})}
              password={forms.password}
            />
            <Button
              style={styles.loginButton}
              text="S'inscrire"
              onClick={onRegister}
            />
            <Text style={styles.registerLink}>Vous avez déjà un compte ?</Text>
            <TouchableText
              style={styles.registerLink}
              text="Connecter vous !"
              onClick={() => navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </View>
      <TouchableText
        style={styles.bottomLinks}
        text="Information du projet"
        onClick={() => navigation.navigate('Details')}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  bottomLinks: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 20,
  },
  registerLink: {
    alignSelf: 'center',
    color: Colors.darkGray,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  loginButton: {
    marginBottom: 10,
    width: 150,
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default RegisterScreen;

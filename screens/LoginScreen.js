import React from 'react'
import {Alert, Image, StyleSheet, Text, View } from 'react-native'

import Button from '../components/Button/Button'
import EmailInput from '../components/Forms/Input/EmailInput'
import PasswordInput from '../components/Forms/Input/PasswordInput'
import Background from '../components/Template/Background'
import TouchableText from '../components/TouchableText/TouchableText'
import Colors from '../config/colors'
import { LoginUser } from '../helper/authenticationHelper'
import UserContext from '../context/UserContext'


const LoginScreen = ({navigation}) => {

  const userContext = React.useContext(UserContext)

  const [forms, setForms] = React.useState({
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
  });

  async function onLogin() {
    if (forms.emailValid && forms.passwordValid) {
      LoginUser(forms.email, forms.password).then((response) => {
        userContext.setProfile({... userContext.profile, id : response.data.session.user.id , email : response.data.session.user.email});
        if (response.error) {
          Alert.alert('Erreur', 'Une erreur est survenue lors de la connexion : ' + response.error)
        } else {
          Alert.alert('Connexion réussie', 'Vous êtes connecté !', [
            { text: 'OK', onPress: () => navigation.navigate('Home') }
          ])
        }
      }).catch((error) => {
        console.log(error)
        Alert.alert('Erreur', 'Une erreur est survenue lors de la connexion :' + error)
      })
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.form}>
          <Image style={styles.image} source={require("../assets/img/Icon.png")} />
          <EmailInput 
            title="Email :" 
            placeholder="exemple@email.com" 
            onChange={(text,isValid) => setForms({ ...forms, email: text, emailValid: isValid })} />
          <PasswordInput 
            title="Password :" 
            onChange={(text,isValid) => setForms({ ...forms, password: text, passwordValid: isValid })} />
          <Button style={styles.loginButton} text="Se connecter" onClick={onLogin} />
          <Text style={styles.registerLink}>Pas de compte ?</Text>
          <TouchableText style={styles.registerLink} text="Créez le !" onClick={() => navigation.navigate('Register')} />
        </View>
      </View>
      <TouchableText style={styles.bottomLinks} text="Information du projet" onClick={() => navigation.navigate('Details')} />
    </Background>
  )
}

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
    flex : 1,
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
})

export default LoginScreen
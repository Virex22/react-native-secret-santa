import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button/Button'

const DetailsScreen = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <Text style={styles.mainTitle}>Le Projet</Text>
        <Text style={styles.title}>Secret santa</Text>
        <Text style={styles.text}>
          Vous souhaitiez une application qui soit complète pour organiser votre secret santa de rêve, vous êtes tombés sur la bonne app ! 
        </Text>
        <Text style={styles.title}>Le concept</Text>
        <Text style={styles.text}>On vous a tout réunis ici pour passer un merveilleux moments entre amis, famille ou encore collègues. 
        Vous pourrez retrouver de nombreuses fonctionnalités sur notre application. Nous vous proposons :
        </Text>
        <Text style={styles.text}> • Création de plusieurs groupes </Text>
        <Text style={styles.text}> • Mise un place d’un montant pour vos cadeaux </Text>
        <Text style={styles.text}> • Liste de cadeaux souhaités </Text>
        <Text style={styles.text}> • Sécurisation des groupes par un code </Text>
        <Text style={styles.text}> • Choix du nombre de tirages. </Text>
        <Text style={styles.text}>Sans oublier un compteur de jours avant noël car c’est ça le plus important ! </Text>
        <Text style={styles.text}>Alors n’hésitez plus, foncez et passez de bonnes fêtes !</Text>
        <Text style={styles.title}>L'équipe</Text>
        <Text style={styles.text}>Nous sommes une équipe de 2 étudiants.</Text>
        <Text style={styles.text}> • Vincent REMY - Partie développement de l'application</Text>
        <Text style={styles.text}> • Valentin Hoffart - Partie maquetage dossier et présentation</Text>

      </ScrollView>
      <Button text='Retour' onClick={navigation.goBack} style={styles.button} />
    </>
  )
}

const styles = StyleSheet.create({
  title : {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text : {
    fontSize: 17,
    textAlign: 'justify',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  mainTitle : {
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
    alignSelf: 'center',
  },
  button : {
    borderRadius: 0,
  }
})

export default DetailsScreen

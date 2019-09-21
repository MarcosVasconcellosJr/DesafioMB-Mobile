import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

//Assets
import {Fonts} from '../utils/fonts';
import background from '../../assets/imgs/bg2.jpg';

export default function Authenticate({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function processLogin() {
    console.log(email);
    console.log(password);

    navigation.navigate('Feed')
  }

  async function screenSignup() {
    navigation.navigate('Signup');
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      {/* Salutation for user :) */}
      <View style={styles.container}>
        <View style={styles.salutation}>
          <Text style={styles.textSalutation}>Tudo pronto para começar...</Text>
        </View>

        {/* White box that own user inputs and action buttons */}
        <View style={styles.box}>
          <View style={styles.boxHead}>
            <Text style={styles.boxHeadText}>Entre</Text>
          </View>

          {/*  View of the inputs of signin and signup, with conditional render */}
          <View style={styles.inputsView}>
            <TextInput
              style={styles.input}
              placeholder="    email"
              placeholderTextColor="#DDDDDD"
              autoCompleteType="email"
              textContentType="emailAddress"
              autoFocus={true}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="    senha"
              placeholderTextColor="#DDDDDD"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={processLogin}>
              <View style={styles.buttons}>
                <Text style={styles.btnText}>Entrar</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.signup}>
              <Text>Ainda não tem uma conta?</Text>
              <TouchableOpacity onPress={screenSignup}>
                <Text style={styles.buttonSignup}>Registrar-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  salutation: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  textSalutation: {
    color: 'white',
    fontSize: 24,
    fontFamily: Fonts.ProductSans_Bold,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  box: {
    flex: 3,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    marginBottom: 50,
    marginHorizontal: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 3,
  },

  boxHead: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxHeadText: {
    fontSize: 24,
    fontFamily: Fonts.ProductSans_Bold,
    fontWeight: 'bold',
    color: '#222222',
  },

  inputsView: {
    flex: 2,
    justifyContent: 'flex-start',
  },

  input: {
    marginTop: 10,
    marginHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomColor: '#DDDDDD',
    fontSize: 16,
  },

  btnContainer: {
    flex: 1.8, //2
    justifyContent: 'flex-start',
  },

  buttons: {
    backgroundColor: '#1DDCAF',
    height: 40,
    marginHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  btnText: {
    fontSize: 20,
    color: 'white',
    fontFamily: Fonts.ProductSans_Bold,
    fontWeight: 'bold'
  },

  signup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
  },

  buttonSignup: {
    color: '#5257F2',
    fontWeight: 'bold',
  },
});

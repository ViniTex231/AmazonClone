import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={ styles.textLogin }>Faça Login na sua Conta</Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={ styles.box }>
            <MaterialIcons style={{ marginLeft: 8 }} name='email' size={24} color='gray' />
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={ styles.inputEmail } placeholder='Digite seu Email' />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
        <View style={ styles.box }>
            <AntDesign name='lock1' size={24} color='gray' style={{ marginLeft: 8 }} />
            <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={ styles.inputSenha } placeholder='Digite sua Senha' />
          </View>
        </View>

        <View style={ styles.viewOpcoes } >
          <Text>Mantenha Logado</Text>

          <Text style={ styles.textEsqueci }>Esqueci a Senha</Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable style={ styles.buttonLogin }>
          <Text style={ styles.textLogin }>Login</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Register')} style={ styles.buttonCadastro }>
          <Text style={ styles.textCadastro }>Não tem uma conta? Cadastre-se</Text>
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  safeView: {
    flex: 1, backgroundColor: 'white', alignItems: 'center'
  },
  textLogin: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#041E42'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#D0D0D0',
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  inputEmail: {
    color: 'gray',
    marginVertical: 10,
    width: 300,
    fontSize:(email) => (email ? 16 : 16),
  },
  inputSenha: {
    color: 'gray',
    marginVertical: 10,
    width: 300,
    fontSize: (password) => (password ? 16 : 16)
  },
  viewOpcoes: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textEsqueci: {
    color: '#007FFF',
    fontWeight: '500'
  },
  buttonLogin: {
    width: 200,
    backgroundColor: '#FEBE10',
    borderRadius: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  },
  textLogin: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonCadastro: {
    marginTop: 15,
  },
  textCadastro: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16
  },

})
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, color: '#041E42' }}>Faça Login na sua Conta</Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#D0D0D0', paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <MaterialIcons style={{ marginLeft: 8 }} name='email' size={24} color='gray' />
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize:email ? 18 : 18 }} placeholder='digite seu Email' />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#D0D0D0', paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <AntDesign name='lock1' size={24} color='gray' style={{ marginLeft: 8 }} />
            <TextInput style={{ color: 'gray', marginVertical: 10, width: 300 }} placeholder='digite sua Senha' />
          </View>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
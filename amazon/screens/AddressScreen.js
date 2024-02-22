import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const AddressScreen = () => {
    const [name, setName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [houseNo, setHouseNo] = useState('')
    const [street, setStreet] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{height: 50, backgroundColor: '#00CED1'}} />

      <View style={{padding: 10}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Adicionar um novo Endereço</Text>

        <TextInput placeholderTextColor={'black'} placeholder='Brasil' style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} />

        <View style={{ marginVertical: 10 }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Nome Completo</Text>
            <TextInput value={name} onChangeText={(text) => setName(text)} placeholderTextColor={'black'} style={{padding:10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='digite seu nome' />
        </View>

        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Número de Celular</Text>
            <TextInput value={mobileNo} onChangeText={(text) => setMobileNo(text)} placeholderTextColor={'black'} style={{padding:10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='digite seu celular' />
        </View>

        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Número da Residência</Text>
            <TextInput value={houseNo} onChangeText={(text) => setHouseNo(text)} placeholderTextColor={'black'} style={{padding:10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='' />
        </View>

        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Bairro</Text>
            <TextInput value={street} onChangeText={(text) => setStreet(text)} placeholderTextColor={'black'} style={{padding:10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='' />
        </View>

        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>CEP</Text>
            <TextInput value={postalCode} onChangeText={(text) => setPostalCode(text)} placeholderTextColor={'black'} style={{padding:10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Digite seu CEP' />
        </View>

        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Cidade</Text>
            <TextInput value={city} onChangeText={(text) => setCity(text)} placeholderTextColor={'black'} style={{padding:10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Digite sua Cidade' />
        </View>

        <Pressable style={{backgroundColor: '#FFC72C', padding: 19, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text style={{ fontWeight: 'bold' }}>Adicionar Endereço</Text>
        </Pressable>

      </View>
    </ScrollView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({})

// 3:42:21
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, Pressable, TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{backgroundColor: '#00CED1', padding: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Pressable style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, backgroundColor: 'white', borderRadius: 3, height: 38, flex: 1}}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput placeholder='Procurar' />
            </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
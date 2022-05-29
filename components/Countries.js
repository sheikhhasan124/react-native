import { View, Text, ScrollView,TextInput ,StyleSheet} from 'react-native'
import React, {useState,useEffect} from 'react'

import Country from './Country'

export default function Countries() {
    const [countries, setCountries]=useState([])
    useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res=>res.json())
       .then(data=>setCountries(data))
    },[])
  return (
    <View>
      <Text style={styles.header}>Countries length {countries.length} </Text>
      <TextInput
        style={styles.input}
      >
      </TextInput>
      <ScrollView>
      {countries.map(country=><Country country={country}></Country>)}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
    fontSize:40,
    marginTop:40,
    color:'red'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

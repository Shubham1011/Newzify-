import React, { Component } from 'react'
import { Text, View, StyleSheet,TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { round } from 'react-native-reanimated';


const SearchBar=(props)=> {
    


        return (
            <View style={style.background}>
        <Text style={{marginTop:12}}><AntDesign name="search1" size={24} color="black" /></Text>
            <TextInput
            onSubmitEditing={props.done}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(val)=>props.onChange(val)}
            placeholderTextColor='black' placeholder='Type your interest here and we got you covered'></TextInput>
                        </View>
        )
    
}

const style=StyleSheet.create({
background:{
    backgroundColor:'white',
    alignSelf:"center",
    height:50,
    borderRadius:10,
    flexDirection:"row"
},
sb:{


}
})

export default SearchBar
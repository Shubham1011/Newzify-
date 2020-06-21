import React, { Component, useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import Article from '../components/Article'

const SpecialScreen=({navigation})=>{
const [result,setResult]=useState(navigation.getParam('result'))
const press=()=>{
    console.log(result.length);
    
}
        return (
            <View  style={{backgroundColor:'#232937' , flex:1}}>
                
                <FlatList style={style.list} data={result} 
                
                renderItem ={({item})=>{
                   return <TouchableOpacity onPress={()=>navigation.navigate('ArticleDetails',{item:item})}><Article item={item}></Article></TouchableOpacity>
                }}
                ></FlatList>
            </View>
        )
    }

    const style=StyleSheet.create({
        txt:{
            alignSelf:"center",
            fontWeight:"bold",
            fontStyle:"italic",
            fontSize:15,
            margin:20,
            color:'white',
            justifyContent:"space-around"
        },
        list:{
            margin:20,
            alignSelf:"center"
        },
        txt1:{
            alignSelf:'flex-start',
            fontWeight:"bold",
            fontStyle:"italic",
            fontSize:20,
            color:'white',
            
        }
        })
        
        
export default SpecialScreen;

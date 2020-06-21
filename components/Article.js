import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Article  =(props)=> {

        return (
            <View style={styles.box}> 
                <Image

        style={{width: 200, height: 100,borderRadius:10}}
        source={{
          uri: props.item.urlToImage,
        }}
      />
             
                <Text style={styles.txt}> {props.item.title} </Text>
                
            </View>
        )
    };
const styles=StyleSheet.create({
    box:{
        width:200,
        height:200,
        backgroundColor:'white',
        borderRadius:10,
        margin:10,
        flex:1,

    },
    txt:{
        fontStyle:"italic",
        fontWeight:"bold",
        textAlign:"center",
        flexShrink:1
    }
})
export default Article

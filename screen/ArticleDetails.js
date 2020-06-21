import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image, Button, ActivityIndicator  } from 'react-native'
import WebView from 'react-native-webview'

const ArticleDetails=({navigation})=>  {
    const [item,setItem]=useState(navigation.getParam('item'))
    const [readmore,setReadMore]=useState(false)
    const [webload,setWebload]=useState(true)
        return ( 
            <View style={{backgroundColor:'#232937',flex:1 ,height:10000}}>
                {   readmore ? <Button title='Get back home' onPress={()=>{setReadMore(false)}}></Button> : <View></View>  }
                
                {webload && readmore ? <ActivityIndicator  
          size="large" style={{flex:1,height:90000}} HorizontalOptions="CenterAndExpand"
          VerticalOptions="CenterAndExpand"></ActivityIndicator>:null}
                 {  readmore  ? <WebView
        source={{
          uri: item.url
        }}
        onLoadStart={()=>{setWebload(true)}}
        onLoad={()=>{setWebload(false)}}
       
      />  :   <View>
                <Text style={styles.txt}>{item.source.name}</Text>
       
  
  <Image

style={{width: 400, height: 300,borderRadius:10,alignSelf:"center"}}
source={{
  uri: item.urlToImage,
}}
/>
  
                <Text style={styles.txt}>{item.title}</Text>
                <Text style={styles.txt1}>{item.description}</Text>
                <Text style={styles.txt1}>{item.content}</Text>
               <Button title="Read more.."  onPress={()=>{setReadMore(true)}}></Button>
<Text style={styles.txt}>By {item.author==null ? <Text>Anonymous</Text>:<Text>{item.author}</Text>} on {item.publishedAt.substring(0,10)}</Text>
</View>}

            </View>
        )
    
}
const styles=StyleSheet.create({
    txt:{
        alignSelf:"center",
        fontWeight:"bold",
        fontStyle:"italic",
        fontSize:15,
        margin:20,
        color:'white',
        justifyContent:"space-around"
    },
    txt1:{
        alignSelf:"center",
        fontWeight:"bold",
        fontStyle:"italic",
        fontSize:15,
        margin:20,
        marginTop:-10,
        color:'white',
        justifyContent:"space-around"
    }
})
export default ArticleDetails;

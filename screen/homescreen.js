import React, { Component, useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native'
import SearchBar from '../components/searchbar'
import axi from '../services/axi'
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Article from '../components/Article'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




const HomeScreen=(props)=> {
    const done= async ()=>{
        await  axi.get('http://newsapi.org/v2/everything?q='+term+'&from=2020-05-21&sortBy=publishedAt&apiKey=8b8d38d7489e4060986c90a20c7f4dd2')
        .then( async (res)=>{
            
            await props.navigation.navigate('SpecialScreen',{result:res.data.articles})
            
        })

    }
    
    const [term,setTerm]=useState('')
    const [techresult,settechResult]=useState([])
    const [sportsresult,setsportsResult]=useState([])
    const [politicsresult,setpoliticsResult]=useState([])
    const [businessresult,setbusinessResult]=useState([])
    const [errmsg,setError]=useState('')
    const [notloading,setnotloading]=useState(false)
    const [specialsearch,setspecialserach]=useState(false)
    const [specialresult,setspecialresult]=useState([])
    useEffect(()=>{
    
        
        try{
     axi.get('http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8b8d38d7489e4060986c90a20c7f4dd2')
        .then((res)=>{settechResult(res.data.articles)}).then(axi.get('http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8b8d38d7489e4060986c90a20c7f4dd2')
        .then((res)=>{setsportsResult(res.data.articles)}).then(axi.get('http://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=8b8d38d7489e4060986c90a20c7f4dd2')
        .then((res)=>{setpoliticsResult(res.data.articles)}).then(axi.get('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8b8d38d7489e4060986c90a20c7f4dd2')
        .then((res)=>{setbusinessResult(res.data.articles)
        setnotloading(true)
        })
        )
        
        )
        )
    
    
    
        }
        catch(e){
         setError(e.message)
        }

    },[])

        return (
            <View style={{backgroundColor:'#232937' , flex:1}}>
                <Text style={style.txt}> Your home to all the news  </Text>
                <SearchBar done={done}  onChange={setTerm}> </SearchBar>
              {notloading ?  <View>
                <ScrollView  
                persistentScrollbar={true}
                
                contentContainerStyle={{flexGrow:1}}
                  style={{borderRadius:30,margin:20,alignContent:'stretch'}}
                  indicatorStyle='white'
                    
                    > 
                <Text style={style.txt1}><Text><MaterialIcons name="computer" size={24} color="white" /></Text>  Technology</Text>
                <FlatList style={style.list} data={techresult} 
                horizontal
                renderItem ={({item})=>{
                   return <TouchableOpacity onPress={()=>props.navigation.navigate('ArticleDetails',{item:item})}><Article item={item}></Article></TouchableOpacity>
                }}
                ></FlatList>
                <Text style={style.txt1}> <FontAwesome name="soccer-ball-o" size={24} color="white" />  Sports</Text>
                <FlatList style={style.list} data={sportsresult} 
                horizontal
                renderItem ={({item})=>{
                   return <TouchableOpacity onPress={()=>props.navigation.navigate('ArticleDetails',{item:item})}><Article item={item}></Article></TouchableOpacity>
                }}
                ></FlatList>
                 <Text style={style.txt1}><SimpleLineIcons name="docs" size={24} color="white" />  Politics</Text>
                <FlatList style={style.list} data={politicsresult} 
                horizontal
                renderItem ={({item})=>{
                   return <TouchableOpacity onPress={()=>props.navigation.navigate('ArticleDetails',{item:item})}><Article item={item}></Article></TouchableOpacity>
                }}
                ></FlatList>
               <Text style={style.txt1} ><FontAwesome5 name="money-check-alt" size={24} color="white" />  Business</Text>
                <FlatList style={style.list} data={businessresult} 
                horizontal
                renderItem ={({item})=>{
                   return <TouchableOpacity onPress={()=>props.navigation.navigate('ArticleDetails',{item:item})}><Article item={item}></Article></TouchableOpacity>
                }}
                ></FlatList>
                <View style={{height:200}} />
                </ScrollView>
                </View> :   <ActivityIndicator style={{alignContent:"center",marginTop:300}} size='large' color="#0000ff" />}
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

export default HomeScreen
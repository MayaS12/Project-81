import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator screenOptions = {({route})=>({
                tabBarIcon: ({focused,color,size})=>{
                    let iconName
                    if(route.name === "Feed"){
                        iconName = focused?'book':'book-outline'
                    }else if(route.name === "CreatePost"){
                        iconName = focused?'create':'create-outline'
                    }
                    return(
                        <Ionicons name = {iconName} color = {color} size = {40}/>
                    )
                }
            })}
            tabBarOptions = {{
                activeTintColor:'tomato',
                inactiveTintColor: 'gray',
                labelStyle: {fontWeight: 'bold', fontSize: 12}
            }}>
                <Tab.Screen name = "Feed" component = {Feed}/>
                <Tab.Screen name = "CreatePost" component = {CreatePost}/>
            </Tab.Navigator>
        )
    }
}



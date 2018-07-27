/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import actions from '../../node_modules/fs-router/actions';

export default class Home extends Component {
  render() {
    return (
      <View style={{backgroundColor:"#f00",flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',justifyContent:'center'}}>
       <Text style={{color:'#0f0'}}
       onPress={()=>{actions.mailList()}}>6666666</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
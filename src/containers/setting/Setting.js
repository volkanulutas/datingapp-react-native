
import * as React from 'react';
import { View, Text } from 'react-native';

function Setting()
{
  return(
    <View style={{ flex: 1, flexDirection: 'row', borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee'  }}>
    <Text 
        style={{
          padding:10, 
          flex: 1,
          flexWrap: 'wrap',
        fontSize: 20,
        fontWeight: "bold",  
        textAlign: 'center', 
        fontWeight: 'bold',
        paddingTop: 160,
      
        width: 200,
        color: "#4CB6ED"
        }}>Setting Screen </Text>
        </View>
  );
}

export default Setting;
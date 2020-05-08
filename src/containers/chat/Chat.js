
import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TouchableHighlight, SafeAreaView} from 'react-native';

function Chat(navigation)
{
  
  const [headlines, setHeadlines] = useState({});
  const url = `http://localhost:8080/matching/matchList?username=volkan`; // TODO: test amaçl¹
  

  // const customData = require('./customData.json');
 
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res.matchingList))
  }
  function renderItem({ item }) {
    return (
      
    <TouchableHighlight onPress={() => { 
  
      navigation.navigate('HeadlineDetail', {
        name: item.username,
        itemId: item.id,
        otherParam: 'anything you want here',
      });
      
      }}>
      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 30, padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
       
        <Image style={{ width: 100, height: 100 }} source={require('../../asset/defaultuser.png')}/>
        <View style={{ flex: 1, paddingLeft: 10 }}>

          <Text 
            style={{ paddingLeft:30,
            fontSize: 35,
            fontWeight: "bold",  
            textAlign: 'center', 
            fontWeight: 'bold',
            marginTop: 30,
            width: 200,
            color: "#4CB6ED"
            }}>{item.username}</Text>

        </View>
      </View>
      </TouchableHighlight>
      );
  }
 
  return (
 
    <View>
    <FlatList
      data={headlines}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  </View>


     /*
 <SafeAreaView>
 <Text>{JSON.stringify(headlines)}</Text>
</SafeAreaView>
  */
  );

}

export default Chat;
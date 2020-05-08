import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Game from '../game/Game';
import Chat from '../chat/Chat';
import Setting from '../setting/Setting';
import Profile from '../profile/Profile';
import Notification from '../notification/Notification';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function Home() {
    return (
   <Tab.Navigator>
        <Tab.Screen name="Oyunlar" component={Game} />
        <Tab.Screen name="Mesajlar" component={Chat} />
        <Tab.Screen name="Bildirimler" component={Notification} />
        <Tab.Screen name="Profil" component={Profile}/>
        <Tab.Screen name="Ayarlar" component={Setting} />
      </Tab.Navigator>
    );
}

export default Home;
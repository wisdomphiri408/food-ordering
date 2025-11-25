import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"coral"}}>
        <Tabs.Screen name="menu" options={{
          title: "Menu", 
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            return focused? (
              <Entypo name="home" size={24} color={color}/>
            ):(
              <AntDesign name="home" size={24} color="black" />
            )}
          }}/>
        <Tabs.Screen name="login" options={{
          title: "Orders", 
          tabBarIcon: ({focused, color}) => {
            return focused ? (
              <Entypo name="login" size={24} color={color} />
            ):(
              <SimpleLineIcons name="login" size={24} color="black" />
            )
          }
          }}/>
          <Tabs.Screen name='index' options={{href: null}}/>
    </Tabs>
  )
}
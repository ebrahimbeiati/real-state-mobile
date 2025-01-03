import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'


const TabIcon = ({focused, icon, title}:{focused:boolean; icon:any;title:string}) => (
    <View className='flex-1 mt-3 flex flex-col items-center'>
        <Image source={icon} className="w-4 h-4" tintColor={focused? '#0061ff': '#666876'} resizeMode="contain" />
        <Text className={`text-sm font-bold ${focused? 'text-blue-500': 'text-gray-500'}`}>{title}</Text>

    </View>
)




const TabLayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          minHeight: 60,
          borderTopWidth: 1,
          borderTopColor: 'transparent',
          elevation: 0,
        },
    }}>
      
      <Tabs.Screen name='index'
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.home} title='Home' focused={focused} />
            )
      }} 
      />
    </Tabs>
  )
}

export default TabLayout
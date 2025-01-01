import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  images  from '@/constants/images'
import icons from '@/constants/icons'

const signIn = () => {
  const handleLogin = () => {
    
  }
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full' >
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />
        <View>
          <Text className='text-base font-rubik uppercase text-center text-black-200'>Welcome to HomeFinder app</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'> Let's find your dream home</Text>
          <Text className='text-base font-rubik text-center text-black-200 mt-4'>Sign in with Google</Text>

          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex-row justify-center items-center'>
              <Image source={icons.google} className="w-4 h-4" resizeMode="contain" />
              <Text className='text-base font-rubik-bold text-black-300 ml-2'>Sign in with Google</Text>
            </View>
            
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  images  from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const signIn = () => {
  const {refetch, loading, isLoggedIn}= useGlobalContext;

  if(!loading && isLoggedIn)return <Redirect href='/' />

  const handleLogin = async() => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Login failed')
    }
    
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
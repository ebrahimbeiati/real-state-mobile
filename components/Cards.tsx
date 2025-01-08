import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import images from '@/constants/images'
import React from 'react'
import icons from '@/constants/icons'

interface Props  {
  item: Models.Document;
  onPress?: () => void
 
}

export const FeaturedCard = ({item:{image, rating, name, address,price},onPress}:Props) => {
  return (

      <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-70 relative'>
        <Image source={{uri:image}} className='size-60 rounded-xl' />
        <Image source={images.cardGradient} className='w-10 h-10 rounded-full absolute bottom-0' />
        <View className='flex flex-row items-center absolute bg-white px-3 py-1.5 rounded-full top-5 right-5'>
            <Image source={icons.star} className='size-3.5' />
            <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>{rating}</Text>
        </View>
        <View className="flex flex-col item-center absolute bottom-5 inset-x-6">
        <Text className="text-xl font-rubik-extrabold text-white" numberOfLines={1}>{name}</Text>
        <Text className="text-base font-rubik text-white">
        {address}
        </Text>
        <View className='flex flex-row items-center justify-between w-full mt-2'>
            <Text className='text-base font-rubik-extrabold text-white'>{price}</Text>
            <Image source={icons.heart} className='w-6 h-6' />

        </View>
      </View>
        </TouchableOpacity>
   
  )
}

 


export const Card =  ({item:{image, rating, name, address,price},onPress}:Props) => {
    return (
      <TouchableOpacity onPress={onPress} className='flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative'>
              <View className='flex flex-row items-center absolute bg-white px-3 p-1.5 rounded-full top-5 right-5 z-50'>
            <Image source={icons.star} className='size-2.5' />
            <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>4.5</Text>
        </View>
        <Image source={{uri:image}} className='w-full h-40 rounded-lg' />
        <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black" >{name}</Text>
        <Text className="text-base font-rubik text-black">
         {address}
        </Text>
        <View className='flex flex-row items-center justify-between  mt-2'>
            <Text className='text-base font-rubik-extrabold text-primary-300'>${price}</Text>
            <Image source={icons.heart} className='w-6 h-6' />

        </View>
      </View>
      </TouchableOpacity>
    )
  }
  

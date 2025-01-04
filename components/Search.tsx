import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import { useState } from 'react'
import icons from '@/constants/icons'
import { Image } from 'react-native'
import { useDebouncedCallback } from 'use-debounce'





const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{query?: string}>();
    const [Search, setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback((text:string)=> router.setParams({query: text}),  500)

    const handleSearch = (text:string) => {
        setSearch(text);
        debouncedSearch(text);
    }
  return (
    <View className='flex flex-row items-center justify-between mt-5 w-full px-5 bg-accent-100 rounded-full border py-2 border-primary-100'> 
     <View className='flex-1 flex flex-row items-center justify-start z-50'>
        <Image source={icons.search} className='w-6 h-6 ' />
        <TextInput
  placeholder="Search"
  value={Search}
  onChangeText={handleSearch}
  className="flex-1 ml-2 text-sm font-rubik text-black-300"
/>
     </View>
     <TouchableOpacity>
        <Image source={icons.filter} className='w-6 h-6' />

     </TouchableOpacity>
    </View>
  )
}

export default Search
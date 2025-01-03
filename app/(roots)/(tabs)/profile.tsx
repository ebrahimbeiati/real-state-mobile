import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images';
import { ImageSourcePropType } from 'react-native'


interface SettingItemsProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ title, icon, onPress, textStyle, showArrow=true }: SettingItemsProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between border-b border-black-100 py-5'>
      <View className='flex flex-row items-center'>
        <Image source={icon} className='size-6' />
        <Text className='text-lg font-rubik-medium text-black-300 ml-5'>{title}</Text>
      </View>
      <Image source={icons.arrowRight} className='size-5' />
    </TouchableOpacity>
  )
}

const Profile = () => {
  const handleLogout = () => {};
  return (
    <SafeAreaView>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerClassName='pb-32 px-7'>
        <View className='flex flex-col items-center'>
          <Text className='text-xl font-rubik-bold text-black-300 mt-10'>
            Profile
          </Text>
          <Image source={icons.bell} className='size-6' />
        </View>
        <View className='flex flex-row items-center mt-10'>
          <View className='flex-1 flex flex-col items-center relative mt-5'>
            <Image source={images.avatar} className='size-40 relative rounded-full' />
            <TouchableOpacity className='absolute right-2 bottom-10'>
              <Image source={icons.edit} className='size-6 ' />
             

            </TouchableOpacity>
 <Text className='text-2xl font-rubik-bold mt-2'>Ebrahim</Text>
          </View>
        </View>
        <View className='flex flex-col  mt-10'>
          <SettingsItem title='My Booking' icon={icons.calendar} />
          <SettingsItem title='Wallet' icon={icons.wallet} />

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile


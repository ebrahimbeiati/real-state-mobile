import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images';
import { ImageSourcePropType } from 'react-native'
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';
import { Alert } from 'react-native';


interface SettingItemsProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ title, icon, onPress, textStyle, showArrow=true }: SettingItemsProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between  py-5'>
      <View className='flex flex-row items-center gap-2'>
        <Image source={icon} className='size-6' />
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className='size-6' />}
    </TouchableOpacity>
  )
}

const Profile = () => {
const {user, refetch} = useGlobalContext();

  const handleLogout = async() => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "Logged out successfully");
      refetch();
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };
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
            <Image source={{uri: user?.avatar}} className='size-40 relative rounded-full' />
            <TouchableOpacity className='absolute right-2 bottom-10'>
              <Image source={icons.edit} className='size-6 ' />
             

            </TouchableOpacity>
 <Text className='text-2xl font-rubik-bold mt-2'>{user?.name}</Text>
          </View>
        </View>
        <View className='flex flex-col  mt-10 '>
          <SettingsItem title='My Booking' icon={icons.calendar} />
          <SettingsItem title='Payment' icon={icons.wallet} />
        </View>
        <View className='flex flex-col mt-5 border-t border-primary-100'>
          {settings.slice(2).map((item, index)=>(
             <SettingsItem key={index} {...item} />
          ))}
        </View>
   
        <View className='flex flex-col mt-5 border-t border-primary-100'>
          <SettingsItem title='Logout' icon={icons.logout} onPress={handleLogout} textStyle='text-red-500' showArrow={false} />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile


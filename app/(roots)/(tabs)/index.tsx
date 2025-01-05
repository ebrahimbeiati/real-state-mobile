import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  { FeaturedCard , Card} from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center"> 
            <Image source={images.avatar} className="w-10 h-10 rounded-full" />
            <View className="flex flex-col items-start ml-3 justify-center">
              <Text className="text-lg font-bold">Hello, Ebrahim</Text>
              <Text className="text-sm text-gray-400">Welcome back</Text>
            </View>
          </View>
          <Image source={icons.bell} className="w-6 h-6" />

        </View>
<Search />
      <View className="my-5">
        <View className="flex flex-row justify-between items-center px-5">
          <Text className="text-lg font-bold">Features</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300" >See all</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between items-center gap-5 px-5 mt-5">
          <FeaturedCard />
          <FeaturedCard />
        </View>
      </View>

        <View className="flex flex-row justify-between items-center px-5">
          <Text className="text-lg font-bold">Our Recommendation</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300" >See all</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-4  mt-5">
          <Card />
          <Card />
          
          </View>
      </View>
   
      
    </SafeAreaView>
  );
}

import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  { FeaturedCard , Card} from "@/components/Cards";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import { avatar } from "@/lib/appwrite";

export default function Index() {
  const {user} = useGlobalContext()
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
      data={[1,2,3,4,5,6,7,8,9,10]}
      renderItem={({item}) => <Card />}
      keyExtractor={(item) => item.toString()}
      numColumns={2}
      contentContainerClassName="pb-20"
      columnWrapperClassName="flex gap-4 px-5"
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className="px-5">
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center"> 
            <Image source={{uri: user?.avatar}} className="w-10 h-10 rounded-full" />
            <View className="flex flex-col items-start ml-3 justify-center">
              <Text className="text-lg font-bold">Hello, {user?.name}</Text>
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
      
      </View>

        <View className="flex flex-row justify-between items-center px-5">
          <Text className="text-lg font-bold">Our Recommendation</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300" >See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        data={[1,2,3,4]}
        renderItem={({item}) => <FeaturedCard />}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-5 flex gap-4"
        bounces={false}
        />
        <Filters />
       
      </View>
      }

      />
      
   
      
    </SafeAreaView>
  );
}

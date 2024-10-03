import { Link, SplashScreen, router, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomBotton from "../components/CustomBotton";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[298px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-white text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="w-[136px] h-[15px] absolute -bottom-2 left-32"
            />
          </View>
          <Text className="text-sm text-gray-100 font-pregular text-center mt-7">
            Where creativity meets innovation: imbark on limitless exploration
            with Aora
          </Text>
          <CustomBotton
            title="Continue with Email"
            BtnStyle="w-full mt-7"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

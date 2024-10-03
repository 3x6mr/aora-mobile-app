import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomBotton from "../../components/CustomBotton";
import { Link, Redirect } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    passowrd: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl font-psemibold text-semibold mt-10">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={"mt-7"}
          />
          <FormField
            title="Password"
            value={form.passowrd}
            handleChangeText={(e) => setForm({ ...form, passowrd: e })}
            otherStyles="mt-7"
          />
          <CustomBotton
            title="Sign in"
            handlePress={submit}
            BtnStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-secondary-100"
              >
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

import { Text, TouchableOpacity } from "react-native";
import React from "react";
import className from "twrnc";
import { Router, useRouter } from "expo-router";
import NwpuLogo from "@/assets/Icons/NwpuLogo";


const index = () => {
	const router: Router = useRouter();
	return (
		<TouchableOpacity
			onPress={() => router.push("/home")}
			style={className`bg-orange-500 flex-1 justify-center items-center`}>
			<NwpuLogo />
			<Text style={className`text-6xl font-bold text-white leading-normal`}>西工大美食</Text>
		</TouchableOpacity>
	);
};

export default index;

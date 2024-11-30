import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import className from "twrnc";
import Svg, { Path } from "react-native-svg";
import { Router, useRouter } from "expo-router";
import { IconProps } from "@/app/types";


const BackIcon = (props: IconProps) => {
	const router: Router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => {
				router.back();
				console.log("BackIcon clicked");
			}}>
			<Svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="black"
				style={className`size-${props.height}`}>
				<Path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
				/>
			</Svg>
	</TouchableOpacity>);
};

export default BackIcon;

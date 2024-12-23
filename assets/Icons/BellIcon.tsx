import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "@/app/types";

const BellIcon = (props: IconProps)=> {
	return (
		<Svg
			fill="white"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="black"
			style={ className`size-${props.height}`}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
			/>
		</Svg>
	);
};

export default BellIcon;

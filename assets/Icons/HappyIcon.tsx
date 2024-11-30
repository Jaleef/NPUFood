import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import Svg, { Path } from "react-native-svg";

const HappyIcon = () => {
	return (
		<Svg
			fill="orange"
			viewBox="0 0 24 24"
			strokeWidth={1}
			stroke="black"
      style={ className`size-12`}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
			/>
		</Svg>
	);
};

export default HappyIcon;

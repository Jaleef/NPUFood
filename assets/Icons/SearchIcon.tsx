import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import className from "twrnc";

const SearchIcon = () => {
	return (
		<Svg
			fill="white"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="black"
			style={className`size-12 bg-white p-2 rounded-full`}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
			/>
		</Svg>
	);
};

export default SearchIcon;
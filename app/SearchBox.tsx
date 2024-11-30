import { View, Text, TextInput } from "react-native";
import React from "react";
import className from "twrnc";
import SearchIcon from "@/assets/Icons/SearchIcon";

// 目前并没有搜索功能，只是一个搜索框
const SearchBox = () => {
	return (
		<View
			style={className`bg-gray-200 p-1 px-2 rounded-full mx-5 flex-row justify-start items-center gap-2`}>
			<TextInput
				placeholder="Search any food"
				style={className`flex-1 text-lg font-semibold text-gray-500 p-3 rounded-l-full`}
			/>
			<SearchIcon />
		</View>
	);
};

export default SearchBox;

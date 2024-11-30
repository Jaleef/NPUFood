import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";

const Nwpu = () => {
	return (
		<Image
			source={require("../images/nwpu.jpg")}
			style={className`w-70 h-70 rounded-full`}
		/>
	);
};

export default Nwpu;

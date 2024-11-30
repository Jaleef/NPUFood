import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { pictures } from '../assets/datas/pictures.json'

import className from 'twrnc';


const Photos = (props: { Header: React.FC }) => {
  return (
    <View style={ className`flex-1`}>
      <FlatList
        data={ pictures }
        numColumns={ 2 }
        keyExtractor={ (item) => item.idPicture }
        renderItem={ ({ item }) => (
          <View style={className`flex-1 p-5`}>
						<Image
							source={{ uri: item.urlPicture }}
							style={className`h-28 w-42`}
						/>
						<Text
							style={className`text-center font-semibold text-gray-500 mt-1`}>
							{item.description}
						</Text>
					</View>
        )}
        ListHeaderComponent={ props.Header }
      >
      </FlatList>
    </View>
  )
}

export default Photos
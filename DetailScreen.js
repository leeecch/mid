import React from 'react';
import { ScrollView, Input, AspectRatio, Image, IconButton, Divider, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { useState } from 'react/cjs/react.production.min';
import {Ionicons,AntDesign } from "@expo/vector-icons"



const ToDoScreen = () => {
  const instState = [{
    title: "Homework",
    isCompleted: true
  }, {
    title: "Meeting ",
    isCompleted: false
  }, {
    title: "Garbage",
    isCompleted: false
  }, {
    title: "Clean up",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = title => {
    if (title === "") {
      toast.show({
        title: "Add New List",
        status: "warning"
      });
      return;
    }

    setList(prevList => {
      return [...prevList, {
        title: title,
        isCompleted: false
      }];
    });
  };

  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = index => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };


  return (
    <Center bg="#F9FBFF" w="100%" h="100%">
      <ScrollView >
        <Box bg="#EDEFF2" w="324" h="400" padding="2" mt="2" mx="auto"  borderRadius={15} shadow={3}>

          <Heading pt={30} fontSize="24" color='#1D2942' textAlign="center" mb="5">To Do List</Heading>
          <VStack space={5} ml="5">
            {list.map((item, itemI) => 
            <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <IconButton icon={<Icon as={Ionicons} name="moon-outline" />} isChecked={item.isCompleted} 
                onPress={() => handleStatusChange(itemI)} value={item.title} _icon={{
                  color: "#1D2942"}}/>
                  <VStack w="100%">
                     <Text width="100%" fontSize={20} flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                      color: item.isCompleted ? "gray.400" : "#1D2942"
                      }} _dark={{
                      color: item.isCompleted ? "gray.400" : "coolGray.50"
                      }} onPress={() => handleStatusChange(itemI)}>
                      {item.title}
                    </Text>
                    <Divider bg="#1D2942" w="200"/>
                  </VStack>
                  
              </HStack>)}
 
          </VStack>
  
            
            <IconButton icon={<Icon as={AntDesign} name="pluscircleo" size="6" mt="5"/>} onPress={() => {
            addItem(inputValue);
            setInputValue("");}} _icon={{color: "#1D2942"}}/>
         
        </Box>    
        <AspectRatio w="100%" mb="0">
          <Image
            source={{uri:'https://raw.githubusercontent.com/leeecch/mid/main/Slice%201.png'}}
            alt='cloud'
          />
        </AspectRatio> 
      </ScrollView>      
    </Center>

  );
}

export default ToDoScreen;
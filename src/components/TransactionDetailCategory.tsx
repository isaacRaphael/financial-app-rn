import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/globalStyles';

const TransactionDetailCategory = () => {
  return (
    <View className='bg-[#EEF2F8] py-3 px-2 rounded-full flex flex-row space-x-2 items-center justify-center w-1/2'>
      <Text>🍔</Text>
      <Text className='text-accent'> Eating Out</Text>
      <FontAwesome name='caret-down' size={24} color={colors.inputGray} />
    </View>
  );
};

export default TransactionDetailCategory;

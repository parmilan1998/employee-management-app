import { StyleSheet, Text, ScrollView, View, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Feather,
  Entypo,
  Ionicons,
  Octicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons'

const index = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#00b4d8', '#90e0ef']}
        style={{ flex: 1 }}
        className='px-3'
      >
        <View className='p-4'>
          <View className='flex-1 flex-row justify-around'>
            <Feather name='bar-chart' size={24} color='black' />
            <Text className='text-lg font-semibold'>
              Employee Management System
            </Text>
            <Entypo name='lock' size={24} color='black' />
          </View>
        </View>
        <View className='flex-row gap-2 items-center'>
          <Pressable className='bg-sky-200 p-6 rounded-2xl flex-1 flex items-center justify-center'>
            <View className='w-50 h-50 p-5 flex justify-center items-center bg-white rounded-full'>
              <Entypo name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Employee List</Text>
          </Pressable>
          <Pressable className=' bg-sky-200 p-6 rounded-2xl flex-1 flex items-center justify-center'>
            <View className='w-50 h-50 p-5 flex justify-center items-center bg-white rounded-full'>
              <Entypo name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Mark Attendence</Text>
          </Pressable>
        </View>
        <View className='p-3 bg-white mt-4 rounded-xl'>
          <Pressable className='flex-row bg-purple-300 p-3 mt-4 rounded-2xl items-center'>
            <View className='p-3 w-14 h-14 rounded-xl bg-white flex items-center justify-center'>
              <Ionicons name='newspaper-outline' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              Attendance Report
            </Text>
            <View className='p-1 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
          <Pressable className='flex-row bg-purple-300 p-3 mt-4 rounded-2xl items-center'>
            <View className='p-3 w-14 h-14 rounded-xl bg-white flex items-center justify-center'>
              <Octicons name='repo-pull' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              Summary Report
            </Text>
            <View className='p-1 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
          <Pressable className='flex-row bg-purple-300 p-3 mt-4 rounded-2xl items-center'>
            <View className='p-3 w-14 h-14 rounded-xl bg-white flex items-center justify-center'>
              <MaterialIcons name='report' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              All Generate Report
            </Text>
            <View className='p-1 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
          <Pressable className='flex-row bg-purple-300 p-3 mt-4 rounded-2xl items-center'>
            <View className='p-3 w-14 h-14 rounded-xl bg-white flex items-center justify-center'>
              <FontAwesome name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              Overtime Employees
            </Text>
            <View className='p-1 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
        </View>
        <View>
          <View>
            <View>
              
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

// const styles = StyleSheet.create({})

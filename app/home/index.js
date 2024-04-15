import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
  ImageBackground,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Feather,
  Entypo,
  Ionicons,
  Octicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  return (
    <ScrollView>
      <LinearGradient
        colors={['#00b4d8', '#90e0ef']}
        style={{ flex: 1 }}
        className='px-3'
      >
        <View className='py-5'>
          <View className='flex-1 flex-row justify-around'>
            <Feather name='bar-chart' size={24} color='black' />
            <Text className='text-lg font-semibold'>
              Employee Management System
            </Text>
            <Entypo name='lock' size={24} color='black' />
          </View>
        </View>
        <View className='flex-row gap-2 items-center'>
          <Pressable
            onPress={() => router.push('/home/employeeScreen')}
            className='bg-sky-200 p-4 rounded-2xl flex-1 flex items-center justify-center'
          >
            <View className='w-50 h-50 p-4 flex justify-center items-center bg-white rounded-full'>
              <Entypo name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Employee List</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push('/home/attendanceScreen')}
            className='bg-sky-200 p-4 rounded-2xl flex-1 flex items-center justify-center'
          >
            <View className='w-50 h-50 p-4 flex justify-center items-center bg-white rounded-full'>
              <Entypo name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Mark Attendance</Text>
          </Pressable>
        </View>
        <View className='p-3.5 bg-white mt-4 rounded-xl'>
          <Pressable className='flex-row bg-purple-300 p-3.5 rounded-xl items-center'>
            <View className='p-3 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <Ionicons name='newspaper-outline' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              Attendance Report
            </Text>
            <View className='p-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
          <Pressable className='flex-row bg-purple-300 p-3.5 mt-4 rounded-xl items-center'>
            <View className='p-3 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <Octicons name='repo-pull' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              Summary Report
            </Text>
            <View className='p-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
          <Pressable className='flex-row bg-purple-300 p-3.5 mt-4 rounded-xl items-center'>
            <View className='p-3 w-12 h-12  rounded-xl bg-white flex items-center justify-center'>
              <MaterialIcons name='report' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              All Generate Report
            </Text>
            <View className='p-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
          <Pressable className='flex-row bg-purple-300 p-3 mt-4 rounded-xl items-center'>
            <View className='p-3 w-12 h-12 rounded-xl bg-white flex items-center justify-center'>
              <FontAwesome name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-semibold ml-3 flex flex-1'>
              Overtime Employees
            </Text>
            <View className='p-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center'>
              <Feather name='arrow-right-circle' size={22} color='black' />
            </View>
          </Pressable>
        </View>
        <View className='flex-row gap-2 items-center mt-2'>
          <View className='bg-orange-200 p-4 rounded-2xl flex-1 flex items-center justify-center'>
            <View className='w-12 h-12 p-3 flex justify-center items-center bg-white rounded-xl'>
              <Entypo name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Attendance Criteria</Text>
          </View>
          <View className='bg-green-200 p-4 rounded-2xl flex-1 flex items-center justify-center'>
            <View className='w-12 h-12 p-3 flex justify-center items-center bg-white rounded-xl'>
              <Octicons name='workflow' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Increased Workflow</Text>
          </View>
        </View>
        <View className='flex-row gap-2 items-center my-2'>
          <View className='bg-pink-200 px-3 py-4 rounded-2xl flex-1 flex items-center justify-center'>
            <View className='w-12 h-12 p-3 flex justify-center items-center bg-white rounded-xl'>
              <FontAwesome5 name='sort-amount-up' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Cost Savings</Text>
          </View>
          <View className='bg-yellow-200 px-2 py-4 rounded-2xl flex-1 flex items-center justify-center'>
            <View className='w-12 h-12 p-3 flex justify-center items-center bg-white rounded-xl'>
              <Entypo name='users' size={24} color='black' />
            </View>
            <Text className='text-base font-normal'>Employee Performance</Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

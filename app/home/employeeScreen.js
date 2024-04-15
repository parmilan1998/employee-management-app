import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'

const employeeScreen = () => {
  const [employee, setEmployee] = useState([])
  // fetch employees data
  useEffect(() => {
    fetch('http://192.168.8.185:8000/api/employees')
      .then((res) => res.json())
      .then((json) => setEmployee(json.data))
      .catch((error) =>
        console.log('Failed to fetch employee information', error)
      )
  }, [])
  console.log(employee)
  return (
    <View className='flex-1 bg-white'>
      <View className='flex flex-row items-center bg-white'>
        <Ionicons name='arrow-back-circle' size={24} color='black' />
        <Pressable className=''>
          <Ionicons name='search-sharp' size={24} color='black' />
          <TextInput placeholder='Search' />
          {employee.map((item, index) => (
            <Text key={index}>{item.employeeName}</Text>
          ))}
        </Pressable>
      </View>
    </View>
  )
}

export default employeeScreen

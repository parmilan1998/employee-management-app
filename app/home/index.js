import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const index = () => {
  return (
    <ScrollView>
      <LinearGradient colors={['#00b4d8', '#90e0ef']} style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <View>
            {/* <Feather name="bar-chart"/> */}
            <Text>Employee Management System</Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

// const styles = StyleSheet.create({})

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
           source={require('./Logo.jpg')}
           
          style={styles.logo}
        />
        <Text style={styles.title}>Empowering the Nation</Text>
      </View>

      
      <Text style={styles.subheading}>Skills Training for Domestic Workers and Gardeners</Text>
      <View style={styles.imagesContainer}>
        <Image
         source={require('./Homedisplay.jpg')}
          style={styles.contentImage}
        />
        
      </View>

     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SixWeekCourses')}>
          <Text style={styles.buttonText}>Short Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SixMonthCourses')}>
          <Text style={styles.buttonText}>Long Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking')}>
          <Text style={styles.buttonText}>Bookings</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B7D5B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3D6E3D',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  contentImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: '#D1A343', 
    padding: 5,
    borderRadius: 5,
    marginVertical: 5, 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


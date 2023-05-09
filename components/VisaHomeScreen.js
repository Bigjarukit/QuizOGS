import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import CustomImageCarousalSquare from './CustomImageCarousalSquare';
const color_green = '#2b9751';
const color_blue = '#22577A';
const color_red = '#d13c3c';
const color_grey = '#b1b1b1';

const data = [
  {
    image: require('../assets/image-product-1.jpg'),
  },
  {
    image: require('../assets/image-product-2.jpg'),
  },
  {
    image: require('../assets/image-product-3.jpg'),
  },
  
];

export default function visa({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <View style={[styles.container,]}>
        <View style={[styles.containerBtw, { alignItems: 'center' }]}>
          <Text style={[styles.textXl, { color: color_blue }]}>All my accounts</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Feather name="bar-chart-2" size={30} style={{ color: color_blue }} />
          </TouchableOpacity>

        </View>
        <Text style={[styles.textSSm, { paddingBottom: 16, color: color_grey }]} >June 10,2018</Text>

        {/* visa */}
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VisaCardScreen')}>
          <LinearGradient
            // Button Linear Gradient
            colors={['#4b6a81', '#254159', '#0b1d2d']}
            style={[styles.ctnVisa, { marginBottom: 24 }]}>
            <View style={[styles.containerBtw, { alignItems: 'flex-end' }]}>
              <View style={{ flexDirection: 'column' }}>
                <Image source={require('../assets/ILMT-visa-logo.png')} style={styles.imageVisa} />
                <Image source={require('../assets/FaHZ-chip-credit-card-png-4.png')} style={styles.imageVisa} />
              </View>

              <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.textSm, { color: '#149c2b', fontWeight: 'normal' }]}>Available Balance</Text>
                <Text style={[styles.textXl, { color: '#fff', fontWeight: 'normal' }]}>$ 7,392.00</Text>
              </View>
            </View>

            <View style={[styles.containerBtw, { marginVertical: 10, marginHorizontal: 0 }]}>
              <Text style={[styles.textMd, { color: '#fff', fontWeight: 'normal' }]}>42012</Text>
              <Text style={[styles.textMd, { color: '#fff', fontWeight: 'normal' }]}>3049</Text>
              <Text style={[styles.textMd, { color: '#fff', fontWeight: 'normal' }]}>2800</Text>
              <Text style={[styles.textMd, { color: '#fff', fontWeight: 'normal' }]}>9815</Text>

            </View>

            <View style={styles.containerBtw}>
              <View style={[styles.containerBtw, { alignItems: 'center' }]}>
                <Text style={[styles.textSSm, { color: '#fff', fontWeight: 'normal' }]}>EXPIRE * </Text>
                <Text style={[styles.textSm, { color: '#fff', fontWeight: 'normal' }]}> 02/22</Text>
              </View>
              <View style={[styles.containerBtw, { alignItems: 'center' }]}>
                <Text style={[styles.textSSm, { color: '#fff', fontWeight: 'normal' }]}>CVC CODE * </Text>
                <Text style={[styles.textSm, { color: '#fff', fontWeight: 'normal' }]}> 230</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity> */}
        <CustomImageCarousalSquare
          data={data}
          
          pagination={true}
        />



      </View>

      <View style={{ paddingHorizontal: 24 }}>
        <View style={[styles.containerBtw, styles.ctnBoxXl,]}>

          <View style={{ flexDirection: 'column' }}>
            <View style={[styles.ctnBoxSm, { justifyContent: 'center', alignItems: 'center', paddingVertical: 4 }]}>
              <Text style={[styles.textSSm, { color: color_blue }]}>Income</Text>
            </View>
            <Text style={[styles.textSm, { paddingTop: 4, color: color_green }]}>
              <AntDesign name="arrowdown" size={16} color='2b9751' />
              $9,302.00
            </Text>
          </View>

          <View style={{ backgroundColor: color_grey, width: 2, height: "100%", }}>
          </View>


          <View style={{ flexDirection: 'column' }}>
            <View style={[styles.ctnBoxSm, { justifyContent: 'center', alignItems: 'center', paddingVertical: 4 }]}>
              <Text style={[styles.textSSm, { color: color_blue }]}>Expense</Text>
            </View>
            <Text style={[styles.textSm, { paddingTop: 4, color: color_red }]}>
              <AntDesign name="arrowup" size={16} style={{ color: color_red }} />
              $2,790.00
            </Text>

          </View>
        </View>

        <View style={[styles.containerBtw, { paddingTop: 16, alignItems: 'center' }]}>
          <Text style={[styles.textMd, { color: color_blue }]}>Detail of movements</Text>
          <MaterialCommunityIcons name="calendar-today" size={24} style={{ color: color_blue }} />
        </View>
      </View>


      <ScrollView style={styles.container}>
        <View style={[styles.containerBtw, styles.ctnBoxXl, { marginBottom: 16 }]}>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <MaterialIcons name="restaurant" size={30} color="black" />
            <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
              <Text style={[styles.textSm]}>Restaurant Manhattan</Text>
              <Text style={[styles.textSSm, { color: color_grey }]}>June 10,2018</Text>
            </View>
          </View>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <Text style={[styles.textSm, { color: color_red }]}>$170 </Text>
            <AntDesign name="arrowup" size={16} style={{ color: color_red }} />
          </View>
        </View>

        <View style={[styles.containerBtw, styles.ctnBoxXl, { marginBottom: 16 }]}>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <MaterialIcons name="attach-money" size={24} color="black" />
            <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
              <Text style={[styles.textSm]}>Salary Deposit</Text>
              <Text style={[styles.textSSm, { color: color_grey }]}>June 1,2018</Text>
            </View>
          </View>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <Text style={[styles.textSm, { color: color_green }]}>$1,200 </Text>
            <AntDesign name="arrowdown" size={16} style={{ color: color_green }} />
          </View>
        </View>

        <View style={[styles.containerBtw, styles.ctnBoxXl, { marginBottom: 16 }]}>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <Fontisto name="shopping-bag-1" size={24} color="black" />
            <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
              <Text style={[styles.textSm]}>Central Market</Text>
              <Text style={[styles.textSSm, { color: color_grey }]}>May 28,2018</Text>
            </View>
          </View>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <Text style={[styles.textSm, { color: color_red }]}>$50 </Text>
            <AntDesign name="arrowup" size={16} style={{ color: color_red }} />
          </View>
        </View>

        <View style={[styles.containerBtw, styles.ctnBoxXl, { marginBottom: 16 }]}>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <MaterialIcons name="attach-money" size={24} color="black" />
            <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
              <Text style={[styles.textSm]}>Salary Deposit</Text>
              <Text style={[styles.textSSm, { color: color_grey }]}>May 1,2018</Text>
            </View>
          </View>
          <View style={[styles.containerRow, { alignItems: 'center' }]}>
            <Text style={[styles.textSm, { color: color_green }]}>$1,200 </Text>
            <AntDesign name="arrowdown" size={16} style={{ color: color_green }} />
          </View>
        </View>


      </ScrollView >
    </View  >
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 16,
    paddingHorizontal: 24
  },
  containerBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textSSm: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'bold'

  },
  textSm: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold'

  },
  textMd: {
    fontSize: 20,
    paddingBottom: 8,
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  textXl: {
    fontSize: 24,
    paddingBottom: 8,
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  ctnVisa: {
    flexDirection: 'column',
    padding: 24,
    backgroundColor: 'red',
    borderRadius: 8
  },
  imageVisa: {
    width: 40,
    height: 30
  },
  ctnBoxXl: {
    borderRadius: 10,
    padding: 24,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  ctnBoxSm: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: color_grey
  }
});





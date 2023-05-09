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

// จำนวน Slide card visa
const data = [
  {
    card: 1,
  },
  {
    card: 2,
  },
  {
    card: 3,
  },
];

export default function visa({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      
      <View style={[styles.container]}>

        {/* component ส่วนบน */}
        <View style={[styles.containerBtw, { alignItems: 'center' }]}>
          <Text style={[styles.textXl, { color: color_blue }]}>All my accounts</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Feather name="bar-chart-2" size={30} style={{ color: color_blue }} />
          </TouchableOpacity>

        </View>
        <Text style={[styles.textSSm, { paddingBottom: 16, color: color_grey }]} >June 10,2018</Text>

        {/* Slide card visa */}
        <CustomImageCarousalSquare
          data={data}
          pagination={true}
        />
      </View>
      
      {/* component ส่วนกลาง */}
      <View style={{ paddingHorizontal: 24 }}>
        <View style={[styles.containerBtw, styles.ctnBoxXl,]}>

          {/* Income */}
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


          {/* Expense */}
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

      {/* component ส่วนล่าง */}
      <ScrollView style={styles.container}>

        {/* menu item 1 */}
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

         {/* menu item 2 */}
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

         {/* menu item 3 */}
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

         {/* menu item 4 */}
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






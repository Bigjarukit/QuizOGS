import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const color_green = '#2b9751';
const color_blue = '#22577A';
const color_red = '#d13c3c';
const color_grey = '#b1b1b1';

export default function HomeTestScreen({ navigation }) {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={[styles.containerBtw, styles.ctnBoxXl]} onPress={() => navigation.navigate('VisaHomeScreen')}>
                <Text style={[styles.textMd, { color: 'black' }]}>VisaHome Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.containerBtw, styles.ctnBoxXl]} onPress={() => navigation.navigate('VisaCardScreen')}>
                <Text style={[styles.textMd, { color: 'black' }]}>VisaCard Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.containerBtw, styles.ctnBoxXl]} onPress={() => navigation.navigate('RobotWalkScreen')}>
                <Text style={[styles.textMd, { color: 'black' }]}>Robot Walk</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 16,
        alignItems: 'center'
    },
    containerBtw: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
   
    textMd: {
        fontSize: 20,
        paddingBottom: 8,
        fontStyle: 'normal',
        fontWeight: 'bold'
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
        width: "80%",
        justifyContent: 'center',
        marginBottom: 20
    },
    ctnBoxSm: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: color_grey
    }
});
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { FlatList } from 'react-native';
import React, { useState } from "react";

const color_green = '#2b9751';
const color_blue = '#22577A';
const color_red = '#d13c3c';
const color_grey = '#b1b1b1';

export default function RobotWalkScreen({ navigation }) {

    const [listAR, setListAR] = useState([]);
    const [positionX, setPositionX] = useState();
    const [positionY, setPositionY] = useState();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            walk: '',
        }
    });

    const onSubmit = (data) => {
        const command = data.walk.split("");
        let fi = command.length, se = command.length, status = 0;
        const area = Array.from({ length: command.length * 2 + 1 }, () => Array(command.length * 2 + 1).fill(''));
        area[command.length][command.length] = '#';


        command.forEach((c) => {
            if (c === 'W') {
                if (status === 0) fi--;
                if (status === 1) se--;
                if (status === 2) fi++;
                if (status === 3) se++;
                area[fi][se] = 'o';
            } else if (c === 'L') {
                status++;
            } else if (c === 'R') {
                if (status === 0) status = 3;
                else status--;
            }
            if (status === 4) status = 0;
        });

        area[fi][se] = '@';
        setListAR(area);
        setPositionX(se - command.length);
        setPositionY(command.length - fi);
    };


    const renderItem = ({ item, index }) => {
        let backgroundColor = 'white';

        if (item === '#') {
            backgroundColor = color_green;
        } else if (item === '@') {
            backgroundColor = color_red;
        } else if (item === 'o') {
            backgroundColor = color_grey;
        }
        return (
            <View style={{ backgroundColor, padding: 10, borderWidth: 1, borderColor: 'black' }}>
            </View>
        );
    };

    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <Text style={[styles.textSm, { color: 'black' }]}>Robot Walk</Text>
                <Text style={[styles.textSm, { color: 'black' }]}>คำสั่ง Robot Walk</Text>
                <Text style={[styles.textSm, { color: 'black' }]}>W – เดินไปด้านหน้าตามทิศทางที่หัน </Text>
                <Text style={[styles.textSm, { color: 'black' }]}>L - หันซ้าย</Text>
                <Text style={[styles.textSm, { color: 'black' }]}>R - หันขวา</Text>
                <Controller
                    control={control}
                    rules={{
                        pattern: {
                            value: /[WLR]/g,
                            message: "กรุณากรอกเฉพาะตัวอักษร W, L หรือ R เท่านั้น",
                        },
                        required: "กรุณากรอกข้อมูล",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="walk"
                            onChangeText={value => onChange(value)}
                            value={value}
                            error={errors?.walk}
                        />
                    )}
                    name="walk"
                />
                {errors.walk && (
                    <Text style={{ color: 'red' }}>{errors.walk.message}</Text>
                )}

                <TouchableOpacity
                    style={[styles.button, { marginTop: 20 }]}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.buttonText}>Run</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <Text>ตำเเหน่งปัจจุบัน : ({positionX} , {positionY})</Text>
                </View>


                <View style={{ marginTop: 20 }}>
                    {listAR.map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            {item.map((subItem, subIndex) => (
                                <View key={subIndex} style={{ flex: 1 }}>
                                    {renderItem({ item: subItem, index: index * item.length + subIndex })}
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 16,
        alignItems: 'flex-start'
    },
    containerBtw: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSm: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        paddingBottom: 5
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
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderColor: color_grey,
        borderRadius: 10,
        padding: 10

    },
    button: {
        marginTop: 10,
        width: 100,
        alignItems: 'center',
        backgroundColor: color_blue,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 10,
    },

});
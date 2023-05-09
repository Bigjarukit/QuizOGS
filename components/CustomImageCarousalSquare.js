import { StyleSheet, View, Image, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    useAnimatedRef,
} from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';
import Pagination from './Pagination';
const color_green = '#2b9751';
const color_blue = '#22577A';
const color_red = '#d13c3c';
const color_grey = '#b1b1b1';
const CustomImageCarousal = ({ data, pagination }) => {


    const scrollViewRef = useAnimatedRef(null);
    const interval = useRef();

    const [newData] = useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' },
    ]);
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const offSet = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });



    return (
        <View>
            <Animated.ScrollView
                ref={scrollViewRef}
                onScroll={onScroll}

                scrollEventThrottle={16}
                decelerationRate="fast"
                snapToInterval={SIZE}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}>
                {newData.map((item, index) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const style = useAnimatedStyle(() => {
                        const scale = interpolate(
                            x.value,
                            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                            [0.8, 1, 0.8],
                        );
                        return {
                            transform: [{ scale }],
                        };
                    });
                    if (!item.image) {
                        return <View style={{ width: SPACER }} key={index} />;
                    }
                    return (
                        // <View style={{width: SIZE}} key={index}>
                        //   <Animated.View style={[styles.imageContainer, style]}>
                        //     <Image source={item.image} style={styles.image} />
                        //   </Animated.View>
                        // </View>
                        <TouchableOpacity >
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
                        </TouchableOpacity>
                    );
                })}
            </Animated.ScrollView>
            {pagination && <Pagination data={data} x={x} size={SIZE} />}
        </View>
    );
};

export default CustomImageCarousal;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 34,
        overflow: 'hidden',

    },
    image: {
        width: '100%',
        height: undefined,
        // aspectRatio: 16/9,
    },
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
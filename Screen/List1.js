import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import axios from "axios";

export default function List1() {

    const [gridItem, setGridItem] = useState()
    const HotelData = async () => {

        const newData = await axios.get("https://reqres.in/api/users?page=1")
        setGridItem(newData.data.data);
    }

    const cilentCheaker = (id) => {
        if (id === 4) {
            return {
                color: 'red',
                status: 'Citizen'
            };
        } else {
            return {
                color: 'green',
                status: 'Client'
            };
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.box}>
            <Image source={{ uri: item.avatar }} style={{ height: "100%", width: "40%", resizeMode: "cover" }} />
            <View style={{padding:10}}>
                <Text style={{ color: 'white', fontSize: 18 }}>{item.first_name} {item.last_name}</Text>
                <Text style={{ color: 'white', fontSize: 13 }}>{item.email}</Text>
            </View>

            <View style={[styles.lable, { backgroundColor: cilentCheaker(item.id).color }]}>
                <Text style={{ color: 'white' }}>{cilentCheaker(item.id).status}</Text>
            </View>
        </View>
    );

    useEffect(() => {
        HotelData();
        return () => {
        }
    }, [])

    console.log(gridItem)

    return (
        <View style={styles.main}>
            <FlatList
                data={gridItem}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "rgb(32,44,88)"
    },
    box: {
        padding: 10,
        marginHorizontal: "5%",
        marginTop:'2%',
        height: 100,
        width: "90%",
        backgroundColor: 'rgb(47,61,110)',
        flexDirection:'row'

    },
    lable: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        width: 50,
        height: 30,
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: "center"
    }
})

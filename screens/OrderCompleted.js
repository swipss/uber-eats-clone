import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItem from '../components/MenuItem';
import firebase from '../firebase';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: 'Bologna',
                description: 'With butter lettuce, tomato and sauce',
                price: '$13.50',
                image: 'https://www.nuggetmarket.com/media/images/10/03/beef-lasagna-square.jpg'
            }
        ]
    })

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    // useEffect(() => {
    //     const db = firebase.firestore();
    //     const unsubscribe = db
    //       .collection("orders")
    //       .orderBy("createdAt", "desc")
    //       .limit(1)
    //       .onSnapshot((snapshot) => {
    //         snapshot.docs.map((doc) => {
    //           setLastOrder(doc.data());
    //         });
    //       });
    
    //     return () => unsubscribe();
    // }, []);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                margin: 15,
                alignItems: 'center',
                height: '100%',
            }}>

            <LottieView style={{
                height: 100,
                alignSelf: 'center',
                marginBottom: 30,
            }}
            autoPlay
            speed={0.5}
            loop={false}
            source={require('../assets/animations/check-mark.json')}
            />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
            }}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
                <ScrollView>

                    <MenuItem foods={lastOrder.items} hideCheckbox={true} />
                    <LottieView style={{
                        height: 200,
                        alignSelf: 'center',
                        marginBottom: 30,
                    }}
                    autoPlay
                    speed={0.5}
                    loop={true}
                    source={require('../assets/animations/cooking.json')}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

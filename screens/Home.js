import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/BottomTabs'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY = "fOZYoRa_EZE89zDJy4QB9BNgEyRz-yR0SLwTJf18M9DLM1Yp3OTNBBPGGwWyy5AAAJtv3xfZNYw08uiBRFZLqrSNvvyU0yTEQ8AiknM4lVnfWQ5xjS32VepaJ7zQYXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('San Francisco');
    const [activeTab, setActiveTab] = useState('Delivery');

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
          };

        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#eee',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }}>
            <View style={{backgroundColor: 'white', padding: 15,}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
               <Categories />
               <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
               
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

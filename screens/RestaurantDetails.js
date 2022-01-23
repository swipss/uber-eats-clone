import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/About'
import MenuItem from '../components/MenuItem'
import ViewCart from '../components/ViewCart'

const foods = [
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.40',
        image: 'https://www.nuggetmarket.com/media/images/10/03/beef-lasagna-square.jpg'
    },
    {
        title: 'Tandoori Chicken',
        description: 'Amazing Indian dish with tenderloin chicken of the sizzling stove',
        price: '$19.20',
        image: 'https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_1920,c_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg'
    },
    {
        title: 'XTRA Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.40',
        image: 'https://www.nuggetmarket.com/media/images/10/03/beef-lasagna-square.jpg'
    },
    {
        title: 'XTRA Tandoori Chicken',
        description: 'Amazing Indian dish with tenderloin chicken of the sizzling stove',
        price: '$19.20',
        image: 'https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_1920,c_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg'
    },
    {
        title: 'XTRAXTRA Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.40',
        image: 'https://www.nuggetmarket.com/media/images/10/03/beef-lasagna-square.jpg'
    },
];

export default function RestaurantDetails({route, navigation}) {
    return (
        <ScrollView>
            <About route={route}/>
            <Divider width={1} style={{marginVertical: 20,}} />
            <MenuItem restaurantName={route.params.name} foods={foods}/>
            <ViewCart navigation={navigation} />
        </ScrollView>
    )
}

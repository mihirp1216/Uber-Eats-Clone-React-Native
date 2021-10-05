import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
	{
		title: 'Lasagna',
		description: 'With butter lettuce, tomato and sauce bechamel',
		price: '$13.50',
		image:
			'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
	},
	{
		title: 'Tandoori Chicken',
		description:
			'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
		price: '$19.20',
		image:
			'https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg',
	},
	{
		title: 'Chilaquiles',
		description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
		price: '$14.50',
		image:
			'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
	},
	{
		title: 'Chicken Caesar Salad',
		description:
			'One can never go wrong with achicken caesar salad. Healthy option with greens and proteins!',
		price: '$10.50',
		image:
			'https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg',
	},
	{
		title: 'Chicken Tikka Masala',
		description:
			'Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce.',
		price: '$20.20',
		image:
			'https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog-500x500.jpg',
	},
];

export default function RestaurantDetail({ route, navigation }) {
	return (
		<View>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems restaurantName={route.params.name} foods={foods} />
			<ViewCart navigation={navigation} restaurantName={route.params.name} />
		</View>
	);
}

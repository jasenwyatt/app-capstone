import React, { Component } from 'react'
import SpecialBox from './SpecialBox'

import appImage from '../images/appetizer-1.jpg'
import dinnerImage from '../images/dinner-1.jpg'
import saladImage from '../images/salad-1.jpg'

const specialsData = [
    {
        "label": "Appetizers",
        "headline": "Tasty Bruchetta",
        "price": "$8",
        "image": appImage,
    },
    {
        "label": "Dinners",
        "headline": "Pasta",
        "price": "$14",
        "image": dinnerImage,
    },
    {
        "label": "Salads",
        "headline": "Chicken Salad",
        "price": "$10",
        "image": saladImage,
    },
];

export default class Specials extends Component {
    render() {
        return (
            <section className="bg-white py-8 sm:py-10">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-forest-600">Specials</h2>
                    <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold font-serif tracking-tight text-gray-950 sm:text-5xl">Check out our fresh deals</p>
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-6 lg:grid-rows-1">
                        {specialsData.map((special, index) => (
                            <SpecialBox 
                                key={index}
                                label={special.label} 
                                headline={special.headline} 
                                price={special.price} 
                                image={special.image} 
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

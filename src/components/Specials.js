import React, { Component } from 'react'
import SpecialBox from './SpecialBox'

const specialsData = [
    {
        "label": "Appetizers",
        "headline": "Delicious some thing",
        "price": "$10",
        "image": "https://tailwindui.com/plus/img/component-images/bento-01-speed.png",
    },
    {
        "label": "Dinners",
        "headline": "Delicious some thing",
        "price": "$22",
        "image": "https://tailwindui.com/plus/img/component-images/bento-01-speed.png",
    },
    {
        "label": "Deserts",
        "headline": "Delicious some thing",
        "price": "$12",
        "image": "https://tailwindui.com/plus/img/component-images/bento-01-speed.png",
    },
];

export default class Specials extends Component {
    render() {
        return (
            <section className="bg-white py-8 sm:py-10">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <p className="mt-2 max-w-lg text-pretty text-4xl font-medium font-serif tracking-tight text-gray-950 sm:text-5xl">Check out our specials!</p>
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-6 lg:grid-rows-1">
                        {specialsData.map((special, index) => (
                            <SpecialBox label={special.label} headline={special.headline} price={special.price} image={special.image} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

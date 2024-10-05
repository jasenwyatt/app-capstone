import React, { Component } from 'react'
import TestimonialBox from './TestimonialBox'

const testimonialsData = [
    {
        "stars": 5,
        "name": "Leslie Alexander",
        "handle": "@lesliealexander",
        "quote": "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        "stars": 5,
        "name": "Macy Wind",
        "handle": "@macywind12",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
        "image": "https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        "stars": 4,
        "name": "Jonathon Ayers",
        "handle": "@jonayers",
        "quote": "Cras dignissim condimentum odio vitae fringilla. Quisque tortor velit, semper fringilla nisl non, posuere vulputate nisl.",
        "image": "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        "stars": 5,
        "name": "Bradley Smith",
        "handle": "@bradsmith",
        "quote": "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        "stars": 5,
        "name": "Jean Williams",
        "handle": "@jeanw",
        "quote": "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        "image": "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=1470&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        "stars": 4,
        "name": "Martina Rule",
        "handle": "@matrinaeats",
        "quote": "Donec vel augue metus. Aenean fringilla molestie imperdiet. Integer aliquam laoreet justo, in dictum enim dictum et.",
        "image": "https://images.unsplash.com/photo-1653379671988-b32fceafb5e5?q=80&w=1588&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

export default class Testimonials extends Component {
  render() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-forest-600">Testimonials</h2>
                    <p className="mt-2 text-4xl font-semibold font-serif tracking-tight text-gray-900 sm:text-5xl">What our guests are raving about</p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonialsData.map((quote,index) => (
                            <TestimonialBox 
                                key={index}
                                stars={quote.stars} 
                                name={quote.name} 
                                handle={quote.handle} 
                                quote={quote.quote} 
                                image={quote.image} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

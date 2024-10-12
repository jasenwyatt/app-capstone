import React, { Component } from 'react'

export default class SpecialBox extends Component {
  render(props) {
    const label = this.props.label;
    const headline = this.props.headline;
    const price = this.props.price;
    const image = this.props.image;

    return (
        <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <img className="h-80 object-cover object-left" src={image} alt={headline} />
                <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-peach-600 uppercase">{label}</h3>
                    <p className="mt-2 text-2xl/7 font-medium tracking-tight text-gray-950">{headline}</p>
                    <p className="mt-2 max-w-lg text-xl/6 text-forest-500">{price}</p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]"></div>
        </div>
    )
  }
}

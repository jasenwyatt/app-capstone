import React, { Component } from 'react'

export default class TestimonialBox extends Component {
  render(props) {
    const stars = this.props.stars;
    const quote = this.props.quote;
    const name = this.props.name;
    const handle = this.props.handle;
    const image = this.props.image;

    return (
        <div class="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <div class="my-4 flex gap-x-1 text-indigo-600">
                    {Array.from({ length: stars }).map((_, index) => (
                        <svg key={index} class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                        </svg>
                    ))}
                </div>
                <blockquote class="text-gray-900">
                    <p>“{quote}”</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                    <img class="h-10 w-10 rounded-full bg-white" src={image} alt={name} />
                    <div>
                        <div class="font-semibold text-gray-900">{name}</div>
                        <div class="text-gray-600">{handle}</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
  }
}

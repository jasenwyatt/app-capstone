import React, { Component } from 'react'

export default class OurStory extends Component {
  render() {
    return (
        <section className="w-full bg-gradient-to-b from-sand-500/20">
            <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8 py-8 lg:py-12">
                <p className="text-base font-semibold leading-7 text-forest-600">About</p>
                <h1 className="mt-2 text-pretty text-4xl font-semibold font-serif tracking-tight text-gray-900 sm:text-5xl">The Little Lemon story</h1>
                <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                        <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.</p>
                    </div>
                    <div>
                        <p>Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor.</p>
                        <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                    </div>
                </div>
                <div className="mt-10 flex">
                    <a href="/about" className="rounded-md bg-peach-500 px-3.5 py-2.5 text-sm font-semibold text-forest-600 shadow-sm hover:bg-peach-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600">Learn more</a>
                </div>
            </div>
        </section>
    )
  }
}

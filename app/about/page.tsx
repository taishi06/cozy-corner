'use client'

import Image from 'next/image'
import AmenityList from '@/app/components/AmenityList'
import Amenity from '@/app/components/Amenity'
import {
    Bed,
    Car,
    Cog,
    Lock,
    MapPin,
    ShowerHead,
    Table2,
    Tv2,
    Wifi,
    Wind
} from 'lucide-react'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function page() {
    return (
        <section className="pt-40 px-6">
            <div className="max-w-6xl mx-auto">
                <ScrollFadeIn>
                    <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                        {/* <h1 className="font-serif text-7xl md:text-9xl text-stone-900 leading-none">
                            Our Story.
                        </h1> */}
                        <h1 className="font-serif text-7xl text-stone-900 mb-10 italic">
                            Our Story.
                        </h1>
                        <p className="text-stone-500 uppercase tracking-widest text-xs font-bold md:mb-4">
                            Foundations & Inspirations
                        </p>
                    </header>

                    <div className="grid md:grid-cols-12 gap-10">
                        <div className="md:col-span-7 relative group overflow-hidden mb-10">
                            <Image
                                fill
                                src="/images/our-story.jpeg"
                                className="object-cover w-full grayscale hover:grayscale-0 transition-all duration-1000"
                                alt="The Sanctuary Interior"
                            />
                            <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none" />
                        </div>
                        <div className="md:col-span-5 flex flex-col justify-center">
                            <p className="text-stone-600 text-lg leading-loose mb-6">
                                Travel has always been at the heart of our
                                journey as a couple. We share a deep love for
                                exploring new places, whether it's discovering
                                hidden gems, immersing ourselves in different
                                cultures, or simply enjoying the beauty of a new
                                destination. But beyond the adventures, one
                                thing has always mattered most to us: having a
                                comfortable place to come home to at the end of
                                each day.
                            </p>

                            <p className="text-stone-600 text-lg leading-loose mb-6">
                                No matter how long or tiring our days were, we
                                made it a point to choose accommodations that
                                felt warm, restful, and inviting. A space where
                                we could recharge and feel at ease.
                            </p>

                            <p className="text-stone-600 text-lg leading-loose mb-6">
                                Before the Covid-19 pandemic, we had several
                                trips lined up, plans we were incredibly excited
                                about. Unfortunately, when the world went into
                                lockdown, all those journeys were suddenly
                                cancelled, and our bookings were refunded. Like
                                many others, we found ourselves pausing,
                                reflecting, and rethinking what we could do
                                next.
                            </p>
                        </div>
                    </div>

                    <div className="mb-20">
                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            One evening, while reminiscing about our past
                            travels and the places we had stayed in, an idea
                            sparked. We asked ourselves: What if we could create
                            a space that offers the same comfort and experience
                            we've always looked for? That moment became the
                            beginning of something new.
                        </p>

                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            Using the refunded travel funds, we decided to take
                            a leap of faith and start our own Airbnb rental. At
                            first, we were unsure, stepping into something
                            completely new always comes with doubts. But we
                            committed ourselves to learning everything we could,
                            paying attention to the smallest details, and
                            carefully designing a space that reflects what we
                            truly value as travelers.
                        </p>

                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            Piece by piece, we built our unit with comfort,
                            functionality, and warmth in mind-creating not just
                            a place to stay, but a space where guests can truly
                            feel at home.
                        </p>

                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            Today, what started as a simple idea born out of
                            unexpected circumstances has grown into something
                            meaningful. Hosting has allowed us to share a part
                            of our journey with others, and we're grateful to
                            welcome guests who, just like us, appreciate a cozy
                            and comfortable place to rest after a day of
                            adventure.
                        </p>

                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            And as they say, the rest is history.
                        </p>
                    </div>
                </ScrollFadeIn>

                <section className="bg-stone-900 text-stone-50 p-16 md:p-32">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-5xl mb-16 leading-tight text-stone-50">
                            Amenities of Intention
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                            <AmenityList icon={<ShowerHead />} name="Bathroom">
                                <Amenity>Hair Dryer</Amenity>
                                <Amenity>Cleaning Products</Amenity>
                                <Amenity>Shampoo and Conditioner</Amenity>
                                <Amenity>Body Shower Gel</Amenity>
                                <Amenity>Bidet</Amenity>
                                <Amenity>Outdoor Shower</Amenity>
                                <Amenity>Hot Water</Amenity>
                            </AmenityList>
                            <AmenityList icon={<Bed />} name="Bedroom">
                                <Amenity>
                                    Essentials: Towels, Bed Sheets, Soap, and
                                    Toilet Paper
                                </Amenity>
                                <Amenity>Hangers</Amenity>
                                <Amenity>Bed Linens</Amenity>
                                <Amenity>Extra Pillows and Blankets</Amenity>
                                <Amenity>Room-darkening shades</Amenity>
                            </AmenityList>
                            <AmenityList icon={<Tv2 />} name="Entertainment">
                                <Amenity>TV</Amenity>
                            </AmenityList>
                            <AmenityList icon={<Wifi />} name="Internet">
                                <Amenity>Wifi</Amenity>
                            </AmenityList>

                            <AmenityList icon={<Lock />} name="Home Safety">
                                <Amenity>Smart Door Lock</Amenity>
                                <Amenity>Smoke Alarm</Amenity>
                                <Amenity>Fire Extinguisher</Amenity>
                            </AmenityList>
                            <AmenityList icon={<Wind />} name="Cooling">
                                <Amenity>Air Conditioning</Amenity>
                                <Amenity>Stand Fan</Amenity>
                            </AmenityList>
                            <AmenityList
                                icon={<Table2 />}
                                name="Kitchen and Dining"
                            >
                                <Amenity>Microwave</Amenity>
                                <Amenity>Mini Fridge</Amenity>
                                <Amenity>Hot Water Kettle</Amenity>
                            </AmenityList>
                            <AmenityList
                                icon={<Car />}
                                name="Parking and Facilities"
                            >
                                <Amenity>Pool</Amenity>
                                <Amenity>Elevator</Amenity>
                                <Amenity>Paid Parking on Premises</Amenity>
                            </AmenityList>
                            <AmenityList
                                icon={<MapPin />}
                                name="Location Features"
                            >
                                <Amenity>Private Entrance</Amenity>
                                <Amenity>Laundromat Nearby</Amenity>
                                <Amenity>Coffee Shop</Amenity>
                            </AmenityList>
                            <AmenityList icon={<Cog />} name="Services">
                                <Amenity>
                                    Long Term Stays allowed: Stay for 28 days or
                                    more
                                </Amenity>
                                <Amenity>Self check-in and check-out</Amenity>
                            </AmenityList>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

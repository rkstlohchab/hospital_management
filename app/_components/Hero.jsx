import { Button } from '@/components/ui/button'

import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <video
              className="absolute inset-0 h-full rounded-2xl w-full object-fill"
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}

            >
              <source src="/jivisha.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl">
              Find & Book
              <span className="text-primary"> Appointment </span>
              with your Fav
              <span className="text-primary "> Doctors</span>
            </h2>

            <p className="mt-4 text-gray-500">
              At Jivisha Hospital, we prioritize your health and well-being with
              a commitment to excellence and compassion.
            </p>

            <Button className="mt-10">Explore Now</Button>
          </div>

        </div>
        
      </div>
    </section>
  );
}

export default Hero
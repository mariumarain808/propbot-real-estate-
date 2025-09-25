import Navbar from '../components/Navbar'
import React from 'react'
import Hero from '../components/Hero'
import Whatwedo from '../components/Whatwedo'
import Featuredproperties from '../components/Featuredproperties'
import Bestproperties from '../components/Bestproperties'
import Startjourney from '../components/Startjourney'
import Latestp from '../components/Latestp'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
    
      <Hero/>
      <Whatwedo/>
      <Featuredproperties/>
      <Bestproperties
      title="Best properties available for sale"
        buttonText="View More Properties"

      />
      <Bestproperties
      title="Find the Perfect Rental Home"
        buttonText="View All Rentals"
        start={10}
        end={14}
      />
      
      <Startjourney/>
      <Latestp/>
      <Footer/>
    </div>
  )
}

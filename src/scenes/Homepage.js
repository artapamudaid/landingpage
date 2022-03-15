import React from 'react'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Features from 'components/Features'
import Pricing from 'components/Pricing'
import Cta from 'components/Cta'
import Footer from 'components/Footer'

export default function Homepage() {
  return (
    <div className="body-wrap">
        <Header/>
        <main>
        <Hero/>
        <Features/>
        <Pricing/>
        <Cta/>
        </main>
        <footer className="site-footer">
        <Footer/>
        </footer>
    </div>
  )
}

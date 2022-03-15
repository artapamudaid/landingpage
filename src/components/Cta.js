import React from 'react'
import Section from 'elements/Section'
import Button from 'elements/Button'

export default function Cta() {
  return (
    <Section isCta>
        <div className="container">
            <div className="cta-inner section-inner">
                <h3 className="section-title mt-0">Still not convinced on buying?</h3>
                <div className="cta-cta">
                    <Button isPrimary isWideMobile>Get in touch</Button>
                </div>
            </div>
        </div>
    </Section>
  )
}

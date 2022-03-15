import React from 'react'
import Section from 'elements/Section'
import Button from 'elements/Button'

export default function Pricing() {
  return (
    <Section isPricing>
        <div className="container-sm">
            <div className="pricing-inner section-inner">
                <div className="pricing-header text-center">
                    <h2 className="section-title mt-0">Unlimited for all</h2>
                    <p className="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                </div>
                <div className="pricing-tables-wrap">
                    <div className="pricing-table">
                        <div className="pricing-table-inner is-revealing">
                            <div className="pricing-table-main">
                                <div className="pricing-table-header pb-24">
                                    <div className="pricing-table-price"><span className="pricing-table-price-currency h2">$</span><span className="pricing-table-price-amount h1">49</span><span className="text-xs">/month</span></div>
                                </div>
                                <div className="pricing-table-features-title text-xs pt-24 pb-24">What you will get</div>
                                <ul className="pricing-table-features list-reset text-xs">
                                    <li>
                                        <span>Lorem ipsum dolor sit nisi</span>
                                    </li>
                                    <li>
                                        <span>Lorem ipsum dolor sit nisi</span>
                                    </li>
                                    <li>
                                        <span>Lorem ipsum dolor sit nisi</span>
                                    </li>
                                    <li>
                                        <span>Lorem ipsum dolor sit nisi</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing-table-cta mb-8">
                                <Button isPrimary isShadow isBlock>Pre order now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

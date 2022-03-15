import React from 'react'
import propTypes from "prop-types"

export default function Section(props) {

    const className = ['section']
    className.push(props.clasName)

    if(props.isHero)
    className.push("hero")
    if(props.isFeatures)
    className.push("features")
    if(props.isPricing)
    className.push("pricing")
    if(props.isCta)
    className.push("cta")

    return (
        <section className={className.join(" ")}>
            {props.children}
        </section>
    )
}

Section.propTypes = {
    isHero: propTypes.bool,
    isFeatures: propTypes.bool,
    isPricing: propTypes.bool,
    isCta: propTypes.bool,
    clasName: propTypes.string
}

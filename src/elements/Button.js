import React from 'react'
import propTypes from "prop-types"

export default function Button(props) {

  const className = ["button"]

  if(props.isPrimary)
  className.push("button-primary")
  if(props.isWideMobile)
  className.push("button-wide-mobile")
  if(props.isShadow)
  className.push("button-shadow")
  if(props.isBlock)
  className.push("button-block")

  return (
    <div className={className.join(" ")}>
        {props.children}
    </div>
  )
}

Button.PropType = {
  isPrimary: propTypes.bool,
  isWideMobile: propTypes.bool,
  isShadow: propTypes.bool,
  isBlock: propTypes.bool,
}

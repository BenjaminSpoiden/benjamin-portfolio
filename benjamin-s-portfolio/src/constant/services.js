import React from "react"
import { SiCoderwall, SiAndroidstudio, SiFigma } from "react-icons/si"

export default [
    {
        id: 1,
        title: "Web development",
        desc: "I started doing web development a few months ago and quickly went for React as it was the most intuitive framework for me.",
        icon: <SiCoderwall className="icon" />
    }, 
    {
        id: 2,
        title: "Web design",
        desc: "I really liked seeing well designed websites and started designing my own using different modern tools such as Chakra UI or Sass.",
        icon: <SiFigma className="icon" />
    }, 
    {
        id: 3,
        title: "Mobile Apps",
        desc: "I started doing mobile development during my apprenticeship and it turned out playing with OOP using Kotlin is a ton of fun.",
        icon: <SiAndroidstudio className="icon" />
    }
]
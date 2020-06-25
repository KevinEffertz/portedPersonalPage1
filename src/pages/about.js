import React from "react"
import Header1 from "../components/header1"

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header1 headerText="About Gatsby" />
            <Header1 headerText="It's pretty cool" />
            <p>Such wow. Very React.</p>
        </div>
    )
}
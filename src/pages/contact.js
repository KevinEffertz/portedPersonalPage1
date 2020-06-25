import React from "react"
import { Link } from "gatsby"
import Header1 from "../components/header1"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header1 headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    )
}
import React from "react"
import { Link } from "gatsby"
import Header1 from "../components/header1"

export default function Home() {
    return (
        <div style={{ color: `purple` }}>
            <Link to="/contact/">Contact</Link>
            <Header1 headerText="Hello Gatsby!" />
            <p>What a world.</p>
            <p>Random from Picsum:<br/><img src="https://picsum.photos/400/200" alt="" /></p>
            <p>Random from Unsplash:<br/><img src="https://source.unsplash.com/random/400x200" alt="" /></p>
        </div>
    )
}
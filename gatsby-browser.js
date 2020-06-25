import "./node_modules/bootstrap/dist/css/bootstrap.css"
import "./node_modules/@fortawesome/fontawesome-free/css/all.css"
import "./src/styles/global.css"

// or:
// require('./src/styles/global.css')

const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry = () => {
    window.onload = () => {
        addScript("/mytypewriter.js")
        addScript("/navshrink.js")
        addScript("/navScroll.js")
        addScript("/animateScroll.js")
    }
}


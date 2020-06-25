import React from 'react'

export const onRenderBody = ({ setBodyAttributes, setPostBodyComponents }) => {
    setBodyAttributes({
        id:  'top',
        'data-spy': 'scroll',
        "data-target": '.navbar'
    });

    setPostBodyComponents([
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>,
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossorigin="anonymous"></script>,
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    ])
}
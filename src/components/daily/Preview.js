import React from 'react'

function Preview(props) {

    // let strippedString = (x) => {
    //     x = x.replace(/(<([^>]+)>)/gi, " "); //Removes all none letters/numbers
    //     x = x.split(")") //Seperates to removes time
    //     console.log(x)
    //     // x = x[0] + ")" + x[1] + ")" //Re-adds the closing parenthesis
    //     return x;
    // }

    return (
        <div>
            <h1>{props.game.editorial.preview.items[0].headline}</h1>
        </div>
    )
}

export default Preview

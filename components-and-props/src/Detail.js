import React, { Fragment } from 'react'

const Detail = (props) => {
    console.log(props);
    return (
        <Fragment>
            <p>
                Name: {props.name}
            </p>
            <p>
                Email: {props.email}
            </p>
        </Fragment>
    )
}

export default Detail;
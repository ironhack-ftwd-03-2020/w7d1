import React from 'react';

const Picture = (props) => {
    return (
        <img src={props.imageUrl} style={{ width: '200px' }} />
    )
}

export default Picture;
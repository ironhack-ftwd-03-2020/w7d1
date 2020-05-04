import React from 'react'
import Detail from './Detail';
import Picture from './Picture';

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Profile</h1>
            <Picture imageUrl={props.data.picture} />
            <Detail name={props.data.name} email={props.data.email} />
        </div>
    )
}

export default Profile;
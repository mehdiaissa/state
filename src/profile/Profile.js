import React from 'react'
import PropTypes  from 'prop-types'

const Profile = (props) => {
  return (
    <div className='profile'>
        <h1>{props.fullName}</h1>
        <h1>{props.profession}</h1>
        <h2>{props.bio}</h2>
        <button onClick={()=>{props.handleName(`this is ${props.fullName}`)}}> click me</button>
        {props.children}
    </div>
  )
}
Profile.defaultProps={
  fullName:"mehdi",
  profession:"developer",
  bio:"arara"
}
Profile.propTypes={
  fullName:PropTypes.string,
  profession:PropTypes.string,
}
export default Profile
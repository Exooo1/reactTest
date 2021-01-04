import React from 'react'
import '../ShowLink/showLinkContacts.css'

const ShowLinkContacts = (props) => {
    return (
        <a target="blank" href={props.href}><img src={props.src}></img></a>
    )
}

export default ShowLinkContacts;
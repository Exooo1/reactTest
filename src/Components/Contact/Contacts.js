import React from 'react';
import '../Contact/contacts.css'

const ShowContacts = (props) => {

    let itemContacts = props.linkCont.map(get => <ShowLinkContacts href={get.href} src={get.src} />);

    return (
        <div className='headCont'>
            <div className="contacts">
                <h1>Contacts</h1>
                <address>Ул.Слободская, 65, кв.76</address>
                <p>Мой телефон +375(44)5131368</p>
                <h2>Мои Социальные сети</h2>
                <dvi className='linkCont'>
                    {itemContacts}
                </dvi>
            </div>
            <div className="mapCont">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaf5ad1045b7777a891659da35c4e5cbd31dcdcc540feea1b7110707d4f449610&amp;source=constructor" frameborder="0"></iframe>
            </div>
        </div>
    )
}

const ShowLinkContacts = (props) => {
    return (
        <a target="blank" href={props.href}><img src={props.src}></img></a>
    )
}

export default ShowContacts;
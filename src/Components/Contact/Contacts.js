import React from 'react';
import '../Contact/css/contacts.css'
import ShowLinkContacts from './ShowLink/ShowLinkContacts'
import StoreContext from '../StoreContext'

const ShowContacts = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let itemContacts = store.getState().contacts.map(get => <ShowLinkContacts href={get.href} src={get.src} />);
                return (
                    <div className="containerCont">
                        <div className='wrapperCont'>
                            <div className="contacts">
                                <h1>Contacts</h1>
                                <address>ul.slobodskaya, 65, kv.76</address>
                                <p>My telephone number +375(44)5131368</p>
                                <h2>My Social Networks:</h2>
                                <div className='linkCont'>
                                    {itemContacts}
                                </div>
                            </div>
                            <div className="map">
                                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A703dc79fb995e90f2208c33c94af79bc118923301833e55
                4fea7efb99b6f09fd&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                )
            }
        }</StoreContext.Consumer>

    )
}

export default ShowContacts;


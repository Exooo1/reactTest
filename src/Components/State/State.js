import reducerProducts from '../redux/products-reducer'
import reducerContacts from '../redux/contacts-reducer'

let store = {
    _state: {
        products: {
            oneTierpPoductItem: [
                { gramPrice: 100, name: "Masala chai ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Herbal tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Flavored tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Black Tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
            ],
            twoTierproductItem: [
                { gramPrice: 100, name: "English Breakfast ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Irish Breakfast", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Earl Grey", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Darjeeling tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
            ],
            threeTierproductItem: [
                { gramPrice: 100, name: "Oolong  ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Green tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "White tea ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
                { gramPrice: 100, name: "Yellow tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
            ],
        },
        showCont: [
            { id: 1, href: "https://vk.com/v.maskalenchik", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIpmL314JAPbFufa7Ilpu9Dkp3XvLeidZA&usqp=CAU', text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
            { id: 2, href: "https://www.instagram.com/vlasmaskalenchik/?igshid=rnfgj9wvr8k7", src: 'https://thumbs.dreamstime.com/b/rounded-instagram-logo-web-print-transparent-white-background-use-printing-purpose-165758567.jpg', text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
            { id: 3, href: "https://www.linkedin.com/in/vlas-maskalenchik-2321031ba/", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VQrC0kqL_LuGB58mVWHKgMv5Fl3M9YML5Q&usqp=CAU', text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
            { id: 4, href: "https://t.me/Vlasmaskalenchik", src: 'https://i.pinimg.com/originals/cf/b0/e3/cfb0e325f5ecfb07166c013014af3d98.jpg', text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        ],
    },

    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.products = reducerProducts(this._state.products, action)
        this._state.showCont = reducerContacts(this._state.showCont,action)
        addRender(this._state)
    }
}


export let subscribe = (observer) => {
    addRender = observer;
}

export let addRender = () => {
}





export default store;
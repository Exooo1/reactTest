const ADD_PRODUCT = "ADD-PRODUCTS"
const GET_ARRAY = "GET-ARRAY"

let initial = {
    oneTierpPoductItem: [
        { cost: 2, gramPrice: 100, name: "Masala chai ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 4, gramPrice: 100, name: "Herbal tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 5, gramPrice: 100, name: "Flavored tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 3, gramPrice: 100, name: "Black Tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
    ],
    twoTierproductItem: [
        { cost: 1, gramPrice: 100, name: "English Breakfast ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 7, gramPrice: 100, name: "Irish Breakfast", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 6, gramPrice: 100, name: "Earl Grey", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 9, gramPrice: 100, name: "Darjeeling tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
    ],
    threeTierproductItem: [
        { cost: 4, gramPrice: 100, name: "Oolong  ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 11, gramPrice: 100, name: "Green tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 5, gramPrice: 100, name: "White tea ", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
        { cost: 3, gramPrice: 100, name: "Yellow tea", src: "https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg", text: "The energetic expression of Christmas, with its warm and intense flavour for an unforgettable holiday." },
    ],
}


const reducerProduct = (state = initial, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            console.log("hello")
            let names = {
                name: "Vlas",
                id: 5
            }
            state.oneTierpPoductItem.push(names)
            return state;
        case GET_ARRAY:
            return state.oneTierpPoductItem.length;
        default:
            return state;
    }
}

export default reducerProduct;
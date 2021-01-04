const ADD_PRODUCT = "ADD-PRODUCTS"

let initial = {
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
        default:
            return state;
    }
}

export default reducerProduct;
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'iPhone 15',
            images: {
                src: 'https://i.ibb.co/VvcTsqP/iphone-15-pro-blacktitanium.jpg',
                size: '(max-width: 991px) 193px'
            },
            inventory: 9,
            details: [
                {
                    key: 1,
                    title: "iPhone 15 Pro",
                    baseSpec: "6.1-inch display",
                    price: "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
                },
                {
                    key: 2,
                    title: "iPhone 15 Pro Max",
                    baseSpec: "6.7-inch display",
                    price: "From $1199 or $49.92/mo.per month for 24 mo.monthsFootnote*"
                }
            ],
            varientText: false,
            varients: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
            storage: [
                {
                    key: 1,
                    title: "128GB",
                    price: "From $999 or $41.62/mo.per month for 24 mo.months*"
                },
                {
                    key: 2,
                    title: "256GB",
                    price: "From $1099 or $49.92/mo.per month for 24 mo.months*"
                },
                {
                    key: 3,
                    title: "512GB",
                    price: "From $1299 or $49.92/mo.per month for 24 mo.months*"
                },
                {
                    key: 4,
                    title: "1TB",
                    price: "From $1499 or $49.92/mo.per month for 24 mo.months*"
                },
            ],
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        }
    },
})
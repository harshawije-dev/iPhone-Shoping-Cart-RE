const app = Vue.createApp({
    data() {
        return {
            product: 'iPhone 15',
            images: {
                src: 'https://i.ibb.co/VvcTsqP/iphone-15-pro-blacktitanium.jpg',
                size: '(max-width: 991px) 193px'
            },
            inventory: 9,
            outOfStock: false
        }
    },
})
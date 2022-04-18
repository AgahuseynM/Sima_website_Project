import axios from "axios";

export default {
    name: 'news',
    data: () => ({
        /*Card List Array*/
        cardListArr: [],

        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            320: {
                slidesPerView: 1,
            }
        }

    }),
    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/cardListArr`);
            this.cardListArr = res.data;
        } catch (err) {
            console.error(err);
        }
    }
}
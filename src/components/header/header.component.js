import axios from "axios";

export default {
    name: "header-component",
    data: () => ({

        /*Magnifying Glass image*/
        magnifyingGlass: require('@/assets/images/magnifying-glass.png'),

        /*Main Menu Data*/
        mainMenu: [],

        /*For mobile menu visibility*/
        mobileMenuVisibility: false,

        /*Visibility of search input*/
        searchInputVisibility: false
    }),

    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/mainMenu`);
            this.mainMenu = res.data;
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        showMobileMenu() {
            this.mobileMenuVisibility = !this.mobileMenuVisibility
        },
        showSearchInput() {
            this.searchInputVisibility = !this.searchInputVisibility
        }
    }
}
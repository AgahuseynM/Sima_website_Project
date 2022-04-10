export default {
    data: () => ({

        /*Magnifying Glass image*/
        magnifyingGlass: require('@/assets/images/magnifying-glass.png'),

        /*Main Menu List*/
        mainMenu: [
            { option_id: 1, menu_option: 'Yüklə' },
            { option_id: 2, menu_option: 'Xidmətlər' },
            { option_id: 3, menu_option: 'Tərəfdaşlar' },
            { option_id: 4, menu_option: 'Kampaniya və xəbərlər' },
            { option_id: 5, menu_option: 'FAQ' },
        ],

        /*For mobile menu visibility*/
        mobileMenuVisibility: false
    }),
    methods: {
        showMobileMenu() {
            this.mobileMenuVisibility = !this.mobileMenuVisibility
        }
    }
}
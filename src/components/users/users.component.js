import axios from "axios";

export default {
    name: 'users',
    data: () => ({

        /*Partner list array*/
        partnersListArr: [],

        /*Users list array*/
        userListArr: []
    }),

    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/partnersListArr`);
            const res2 = await axios.get(`http://localhost:3001/userListArr`);
            this.partnersListArr = res.data;
            this.userListArr = res2.data;
        } catch (err) {
            console.error(err);
        }
    }
}
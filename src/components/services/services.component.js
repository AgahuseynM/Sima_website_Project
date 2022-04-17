import axios from "axios";

export default {
    name: 'services',
    data: () => ({
        /*Service List Array*/
        serviceListArr: []
    }),
    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/serviceListArr`);
            this.serviceListArr = res.data;
        } catch (err) {
            console.error(err);
        }
    }
}
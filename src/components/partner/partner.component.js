import axios from "axios";

export default {
    name: "partner",
    data: () => ({

        /*Be Partner List Array*/
        partnerListArr: []
    }),

    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/partnerListArr`)
            this.partnerListArr = res.data;
        } catch(err) {
            console.log(err)
        }
    }
}
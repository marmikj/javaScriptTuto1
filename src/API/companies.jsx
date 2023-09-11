import axios from "axios";

const getComapnies =()=>{axios.get(
    "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",

)
.then((res) => {
    console.log(res.data)
    return res.data
})
.catch((err) => {
    console.log(err)  
})
}
export default  getComapnies


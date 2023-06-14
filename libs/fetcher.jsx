import axios from "axios";

const fetcher = (url) =>
     axios.get(url).then((res) => {
        console.log("reponse",res.data)
          return res.data;
     });

export default fetcher;

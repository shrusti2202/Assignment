import React, {useState, useEffect} from "react";
import axios from 'axios';

 export default function Photos() {

  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/photos',
        );
        setData(result.data);
          console.log(result.data);
      };
      fetchData();
    }, []);


  return (
    <>
    <div>
        {
          data.map((value,index,arr) => {
            return(
              <tr>
              <td>{value.albumId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              {/* <td>{value.url}</td> */}
              <td><img src={value.thumbnailUrl}/></td>
            </tr>
            )
          })
        }

    </div>
    </>
  );
}
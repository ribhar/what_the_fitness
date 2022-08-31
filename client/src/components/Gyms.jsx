import React, { useEffect, useState } from "react";
import styles from './Gyms.module.css'
import { useNavigate } from "react-router-dom";
import { MdLocationOn, MdSearch} from "react-icons/md";
import { FiNavigation } from "react-icons/fi";
import axios from "axios";

const Gyms = () => {
   const [loading, setLoading] = useState(false);

   const [filter, setFilter] = useState("");

   const [data, setData] = useState([]);

   const [text, setText] = useState("");

   const [error, setError] = useState(false);
   const [data2, setData2] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
      setLoading(true);
      axios.get(
          `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${filter}`
        ).then(({data})=>{
          setLoading(false);
          localStorage.setItem("gym",JSON.stringify(data))
          setData(data.data)
        }).catch((error)=>{setLoading(false)
          setError(true)
        });

    }, [filter]);
  
    useEffect(()=>{
      axios.get(`https://devapi.wtfup.me/gym/places`).then(({data})=>setData2(data.data))
        .catch((error)=>console.log(error));
    }, []);
    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <>Something Went Wrong...</>
        ) : (
          <div>
            <div className={styles.inputbox}>
                <MdSearch fontSize={25}/>
                <input placeholder="Search gym name here..." onChange={(e)=>setText(e.target.value)} value={text} />
                <button className={styles.searchbtn1}><MdLocationOn fontSize={25}/></button>
                <button className={styles.searchbtn2} onClick={() => setText("")}>Clear</button>
            </div>

            <div className={styles.gymsbox}>
                <div>
                    <p className={styles.head1}>Filters</p>
                    <p className={styles.head2}>Cities</p>
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option>Select City</option>{data2.map((el, ind) => {
                            return <option key={ind}>{el.city}</option>;
                        })}
                    </select>
                </div>
                <div className={styles.gymcon}>
                    {data && data.map((el, ind) => {
                        return (
                        <div key={ind} className={styles.gym} onClick={()=>navigate(`/${el.user_id}`)} >
                            <div className={styles.empty}></div>
                            <div className={styles.detail}>
                                <h2>{el.gym_name}</h2>
                                <p>★★★★★</p>
                                <p> {el.address1} , {el.address2}, {el.city} </p>
                                <div> <FiNavigation/>{el.duration_text} | {el.distance_text} </div>
                                <div><button className={styles.bookbtn}>Book Now</button> </div>
                            </div>   
                        </div>
                        );
                    })}
                </div>
            </div>
            
          </div>
        )}
      </>
    );
}

export default Gyms

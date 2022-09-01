
import styles from './Gym.module.css';

import LOGO from '../assets/logo1.png'

import React, { useEffect, useState } from "react";

import { MdLocationOn} from "react-icons/md";
import { GrLocation} from "react-icons/gr";

import { useParams } from "react-router-dom";

import axios from "axios";

const Gym = () => {
  
  const { user_id } = useParams();

  const [plans, setPlans] = useState([]);

  const loicon = { color: "white"};

  const [bnft, setBnft] = useState([]);

  const [terms, setTerms] = useState([]);

  const data = JSON.parse(localStorage.getItem("gym"));

  const facilities = JSON.parse(localStorage.getItem("facilities"));
console.log(facilities)

  const postData=()=>{

    axios.post(`https://devapi.wtfup.me/gym/plan`,{gym_id:user_id}).then(({data})=>setPlans(data.data));

  };

  useEffect(() => {

    setBnft(facilities.benefits);
    setTerms(data.terms);
    postData();

  }, []);

  return (

    <div className={styles.container}>
      <div className={styles.headcon}>
        <div>
          <p className={styles.head1}>{facilities.gym_name}</p>
          <div className={styles.locon}>
            <MdLocationOn fontSize={25}/>
            <p className={styles.head2}> {facilities.address1},{facilities.address2},{facilities.city} </p>
          </div>
        </div>
        <div className={styles.ratings}>
          <p>★ ★ ★ ★ ★</p>
          <p>{facilities.rating} Ratings</p>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div>
            <p className={styles.head2A}>Description</p>
            <p className={styles.head3}>{facilities.description}</p>
          </div>
          <div>
            <p className={styles.head2A} >Facilities</p>
            <div className={styles.faci}> {bnft.map((el) => (
              <p>{el.name}</p>
            ))}</div>
           
          </div>
          <div>
            <p className={styles.head2A}>Why to choose WTF?</p>
            <div className={styles.cardcon}>
              {terms.map((el, ind)=>(
                <div className={styles.card}>
                  <p className={styles.head4}>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {plans.map((el,ind)=>(
            <div className={styles.plan} key={ind}>
              <p className={styles.planhead}>Plan {ind + 1}</p>
              <div className={styles.locon}>
                <img src={LOGO} alt="logo" />
                <button>{el.plan_price}</button>
              </div>
             
              <p>{el.description}</p>
             
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Gym

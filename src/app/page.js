'use client';
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import  './users.css'

import React, {useEffect, useState} from "react";

export default function Home() {
    const baseUrl = "https://randomuser.me/api/?results=20";
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
        async function  fetchUsers ()  {
            setLoading(true);
          await  fetch(baseUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.results);
                    setUsers(data.results)
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                    setError(error);
                    setLoading(false);
                });
        }
        fetchUsers();


    },[]);

    async function fetchWithAxios(){
        setLoading(true);
        try {
            const response = await axios.get(baseUrl);
            console.log(response.data.results);
            setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setError(error);
            setLoading(false);
        }

    }

    function UserCard({name,location,email,picture}){
        return(
            <div className='user-card'>
                <Image  className='user-image'
                    src={picture.large}
                    alt={`${name.first} ${name.last}`}
                    width={100}
                    height={100}
                />
                <h3 className='user-name'>{`${name.first} ${name.last}`}</h3>
                <h4 className='user-location'>{location.country}</h4>
                <a className='user-email' href={`mailto:${email}`}>{email}</a>
            </div>
        )
    }


  return (
        <div className='users-container'>
            {loading && <p>Loading...</p>}
            {!error && <h1 className='title'>Users Fetched</h1>}
            {!error && users.map((user) =>     <UserCard key={user.login.uuid} {...user} />)}
            {!error && <button onClick={fetchWithAxios}>Fetch More Users</button>}
            {error && <p>Error fetching data</p>}
        </div>
  );
}

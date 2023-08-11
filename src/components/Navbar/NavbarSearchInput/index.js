'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./styles.module.css";
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';

function index() {
    const router = useRouter();
    const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
  
      e.preventDefault();
  
      router.push(`/arama?q=${query}`);
  
    };
  
    const handleChange = (e) => {
      setQuery(e.target.value);
    };
  



  return (
    <div>
        <form onSubmit={handleSubmit} className={`d-flex ${styles["category-size"]}`}>
            <input 
            className={`form-control ${styles.searchRounded}`} 
            type="search" 
            placeholder="Arayın" 
            aria-label="Search"
            value={query}
            onChange={handleChange}
            />
            <button type="submit" className={`btn btn-outline-light text-secondary ${styles.iconRounded}`} style={{ backgroundColor: "#EF8E01" }}>
                <AiOutlineSearch className={`text-light ${styles.icon_search} `} style={{ fontSize: "24px" }} />
            </button>
        </form>
    </div>
  )
}

export default index
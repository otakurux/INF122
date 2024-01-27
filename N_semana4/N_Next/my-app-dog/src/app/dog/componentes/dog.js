"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./dog.module.css";

function Dog({ title }) {
    const [dog, setDog] = useState("/vercel.svg");
    
    const url = "https://dog.ceo/api/breeds/image/random";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setDog(data.message);
            });
    }, []);

    return (
        <div className={style.box}>
            <h1>{title}</h1>
            <Image src={dog} alt="dog" width={500} height={500} className={style.image}/>
        </div>
    );
}

export default Dog;

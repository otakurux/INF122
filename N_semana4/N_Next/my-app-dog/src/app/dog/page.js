"use client"

import React from "react";
import style from "./page.module.css"
import Dog from "./componentes/dog";

const page = () => {
    return (
        <div className={style.main}>
            <Dog
                title={"Dogs"}
            />
        </div>
    )
}

export default page;

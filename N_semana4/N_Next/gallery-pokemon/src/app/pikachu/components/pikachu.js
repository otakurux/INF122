
import { useEffect, useState } from "react";
import styles from "../styles/pikachu.module.css";
import Image from "next/image";

const Pikachu = () => {
    const [pikachu, setPikachu] = useState("/vercel.svg");
    const [estado, setEstado] = useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad");
    const [def, setDef] = useState("");

    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    useEffect(() => {
        fetch(url)
            .then((rel) => rel.json())
            .then((data) => {
                setPikachu(data.sprites.front_default);
                setEstado(data.species.name);
                setHabilidad(data.moves[0].move.name);
                setDef(data.held_items[0].item.name)
            })
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{estado}</h1>
            <div className={styles.cartContainer}>
                <div className={styles.info}>
                    <h2 className={styles.subTitle}>Habilidad: {habilidad}</h2>
                    <h2 className={styles.subTitle}>def: {def}</h2>
                    <h2 className={styles.subTitle}>Habilidad: {habilidad}</h2>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={pikachu}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pikachu;
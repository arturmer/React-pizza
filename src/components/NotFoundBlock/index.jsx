import React from "react"

import styles from "./NotFoundBlock.module.scss"

console.log(styles)

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br />
                Ничего не найдено
            </h1>
            <p className={styles.desccription}>
                К сожалению, данная страница отсутствует в нашем
                интернет-магазине
            </p>
        </div>
    )
}

export default NotFoundBlock

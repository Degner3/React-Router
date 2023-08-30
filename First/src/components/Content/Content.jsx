import style from "./Content.module.scss"


export const Content = ({children, title}) => {

    return (
        <>
        <div className={style.contentWrapper}>
            <h1>{title}</h1>
            <section>
                {children}
            </section>
        </div>
        </>
    )
}
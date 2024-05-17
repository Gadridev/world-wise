import styles from './Button.module.css'
function Button({children,onclick,type}) {
    return (
        <div>
            <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
                {children}
            </button>
        </div>
    )
}

export default Button

import styles from './button.module.css'

function btn({ text, handler }) {
  return (
    <button className={styles.button} onClick={handler}>
      {text}
    </button>
  )
}

export default btn
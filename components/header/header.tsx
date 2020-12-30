import styles from './Header.module.css'

const Header: React.FC = () => {
  const global = React.useContext(Context);

  return (
    <div className={styles.header}>
      <span id={styles.title}>
        Helloworld
      </span>
      <span className={styles.container}>
        <button id={styles.button}>See All Messages</button>
        <img id={styles.avatar} src={globalavatar} />
      </span>
    </div>
  )
}

export default Header;
import Link from 'next/link'
import styles from '../styles/Home.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div>
                Backed by Polychain Capital, Avalanche&apos;s Blizzard Fund, DAO5, and a curated set of angel investors.
                Made by <Link href="https://dbdao.xyz/" target="_blank" rel="noreferrer"><a className={styles.greenlink}>DB DAO</a></Link> in CA, NY, and Berlin.
            </div>
            <div>
                Follow DB DAO on
                <Link href='https://twitter.com/db_dao' target="_blank" >
                    <a className={styles.greenlink}> Twitter</a>
                </Link>.
            </div>
        </footer>
    )
};

export default Footer;
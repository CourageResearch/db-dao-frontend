import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';

const menu = [
    ["/", "Home"],
    ["/mintDatabase", "Mint a DB"],
    ["/explore", "Explore DBs"],
    ["https://docs.dbdao.xyz", "Lightpaper"],
    ["/videos", "Videos"],
    ["/contact", "Contact"], 
    ["/jobs", "Jobs"],
    
    // ["/tldr", "tldr"],
    // ["/faq", "faq"],
    // ["/news", "news"],
]


const Navbar = () => {
    const router = useRouter();
    return (
        <div className="grid grid-cols-4 w-[35rem]">
            {
                menu.map(([path1, name1], key) => (
                    <Link key={key} href={path1}>
                        <a 
                            target={path1.includes("http") ? "_blank" : ""}
                            className={router.pathname === path1 ? styles.navbarActive : styles.navbarInactive}
                        >
                            {name1}
                        </a>
                    </Link>
                ))
            }
        </div>
    )
};

export default Navbar;
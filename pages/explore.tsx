import type { InferGetServerSidePropsType } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import getConfig from 'next/config'
import Link from 'next/link';
const { publicRuntimeConfig } = getConfig()

const Explore = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    return (
        <div className="container mx-auto w-[35rem]">

            <Header web3={false} />

            <main className={styles.main}>
                <p className={styles.description}>
                    Explore some distributed databases.
                </p>
                    <div className="divide-y divide-slate-200">
                        {
                            data.map((database:any, index:any) => {
                                return (
                                    <Link key={index} href={"/database/" + database._id} >
                                        <a key={index} className="text-xl  py-4 hover:text-green-500 flex flex-row justify-between items-center">
                                            {database.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
            </main>
        </div>
    );
};

export default Explore;

export async function getServerSideProps() {
    const baseUrl = publicRuntimeConfig.baseUrl
    const res = await fetch(`${baseUrl}/databases`)
    const data = await res.json()
    return { props: { data } }
}
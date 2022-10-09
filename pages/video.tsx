import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

const Video: NextPage = () => {
    return (
        <>
            <Header web3={false} />
            <div className={styles.description}>
                DB DAO is a protocol for community owned databases.
            </div>

            <div className="my-3">
                Decentralized apps will run on decentralized databases. DB DAO makes each database a DAO and each row in a database an NFT.
            </div>

            <div className="my-3">
                As a database monetize, those that contributed to it are rewarded.
            </div>

            <div className="my-3">
                DB DAO is a new protocol to incentivize contributions and allow for structured web3 data to be stored and queried.
            </div>
        </>
    );
};

export default Video;
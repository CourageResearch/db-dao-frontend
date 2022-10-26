import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Link from 'next/link';

const Home: NextPage = () => {
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

            <div className="my-3">
                Get started building a dapp with DB DAO.  Fork the  {" "}
                <a href='https://github.com/CurateDAO/db-dao-frontend' target="_blank" rel="noopener noreferrer" className={styles.greenlink}>
                    white label app on github
                </a> to get started.
            </div>

            
            <div className="font-semibold">
                Summary
            </div>

            <ul className="list-disc list-inside">
                <li>
                    Each database is managed by a DAO (<Link href="https://gnosis-safe.io/"><a className={styles.greenlink}>gnosis multisig</a></Link>)
                </li>
                <li>
                    Each row in a database is an NFT (<Link href="https://eips.ethereum.org/EIPS/eip-721"><a className={styles.greenlink}>ERC-721</a></Link>)
                </li>
                <li>
                    Data curation and incentives in stablecoin (<Link href="https://www.circle.com/en/usdc"><a className={styles.greenlink}>USDC</a></Link>)
                </li>
                <li>
                    Final resolution of data on distributed filesystem (<Link href="https://www.ipfs.com/"><a className={styles.greenlink}>IPFS</a></Link>)
                </li>
                <li>
                    Columns in a database can be encrypted (<Link href="https://litprotocol.com/"><a className={styles.greenlink}>Lit Protocol</a></Link>)
                </li>
                <li>
                    Drop in replacement for web2 ORM databases (<Link href="https://www.prisma.io/"><a className={styles.greenlink}>Prisma</a></Link>)
                </li>
                <li>
                    (soon) ZK proofs to verify queries in the cache
                </li>
            </ul>



        </>
    );
};

export default Home;
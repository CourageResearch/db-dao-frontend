import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Fragment, FunctionComponent } from 'react';
import Navbar from './Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import contractInterface from '../contract-abi.json';
import configContracts from "../configContracts.json"
import { useSigner } from 'wagmi';

interface Props {
      web3: boolean;
}

const contractAddress = configContracts['ArbitrumGoerli'][process.env.NODE_ENV]
console.log(contractAddress)

export const contractConfig = {
    addressOrName: contractAddress,
    contractInterface: contractInterface,
};



const Header: FunctionComponent<Props> = ({ web3 }) => {

    // const {data: signer} = useSigner();
    // console.log(signer?._address)
    // "0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F"
    // const web3 = new Web3((signer?.provider as any).provider);

    return (
        <Fragment>
            <Head>
                <title>DB DAO</title>

                <meta
                    name="description"
                    content="Welcome to DB DAO. DB DAO makes each database a DAO and each database row an NFT.  As a database monetizes, the people that contributed are rewarded."
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@db_dao" />
                <meta name="twitter:title" content="DB DAO - The open source database for web3 apps" />
                <meta name="twitter:description" content="DB DAO is a protocol for community owned databases. DB DAO makes each database a DAO and each database row an NFT.  As a database monetizes, the people that contributed are rewarded." />
                <meta name="twitter:image" content="https://www.dbdao.xyz/twitter.png" />

            </Head>

            <div className="flex flex-wrap justify-between items-center mx-auto">
                <Link href='/'>
                    <a>
                        <h1 className={`${styles.logo} flex items-left`}>
                            DB DAO
                        </h1>
                    </a>
                </Link>

                <div className="flex items-right mr-3" >
                    {web3 ? <ConnectButton /> : null}
                </div>
            </div>

            <Navbar/>
        </Fragment>
    )
};

export default Header;




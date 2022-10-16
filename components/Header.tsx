import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Fragment, FunctionComponent } from 'react';
import Navbar from './Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import contractInterface from '../contract-abi.json';
import configContracts from "../configContracts.json"

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
    return (
        <Fragment>
            <Head>
                <title>DB DAO</title>
                <meta
                    name="description"
                    content="Welcome to DB DAO! A DAO for databases."
                />
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




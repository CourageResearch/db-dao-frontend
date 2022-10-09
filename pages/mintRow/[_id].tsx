import { useEffect, useState } from 'react';
import type { InferGetServerSidePropsType } from 'next';
import {
    useContractWrite,
    usePrepareContractWrite,
    useNetwork,
} from 'wagmi';
import styles from '../../styles/Home.module.css';
import pinataSDK from "@pinata/sdk"
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import getConfig from 'next/config'
import Header, { contractConfig } from '../../components/Header';
import Link from 'next/link';
import Router from 'next/router'

const { publicRuntimeConfig } = getConfig()

const MintRow = ({ database }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const databaseId = database.databaseId
    const database_id = database._id
    const databaseName = database.name
    const deposit = database.deposit

    const formSchema = database.formSchema
    const formUiSchema = database.formUiSchema
    const initDormData = database.formData

    const PINATA_KEY = publicRuntimeConfig.PINATA_KEY
    const PINATA_SECRET = publicRuntimeConfig.PINATA_SECRET
    const pinata = pinataSDK(PINATA_KEY, PINATA_SECRET);

    const { chain: activeChain } = useNetwork();
    const [ipfsHash, setIpfsHash] = useState<string | undefined>()
    const [formData, setFormData] = useState(initDormData);
    const [isIPFSLoading, setIsIPFSLoading] = useState(false)

    // const explorerUrl = activeChain?.blockExplorers?.default.url
    // const exploreName = activeChain?.blockExplorers?.default.name

    async function uploadToPinata(data: any) {
        setIsIPFSLoading(true)
        let name = ""
        try {
            name = String(Object.entries(data)[0][1])
        } catch (error) {
            console.log(error)
        }

        const body = data

        const options = {
            pinataMetadata: {
                name: name.substring(0, 200)
            }
        }

        try {
            const result = await pinata.pinJSONToIPFS(body, options)
            console.log("uploaded")
            setIsIPFSLoading(false)

            return result.IpfsHash
        } catch (error) {
            console.log(error)
        }
    }

    const {
        config,
        error: prepareError,
        isError: isPrepareError,
        isSuccess: isPrepareSuccess
    } = usePrepareContractWrite({
        ...contractConfig,
        functionName: 'mintRow',
        args: [databaseId, ipfsHash],
        enabled: Boolean(ipfsHash),
        overrides: {
            value: deposit,
        },
    });

    const {
        data,
        error,
        isError,
        write,
        isLoading,
        isSuccess,
    } = useContractWrite(config);

    useEffect(() => {
        if (isPrepareSuccess) {
            console.log("isPrepareSuccess")
            write?.()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPrepareSuccess]);

    const writeToChain = async () => {
        console.log(formData)
        const ipfsHash = await uploadToPinata(formData)
        setIpfsHash(ipfsHash)
    }

    useEffect(() => {
        if (isSuccess) {
            Router.push('/database/' + database_id)
        }
    }, [database_id, isSuccess]);

    return (
        <>
            <Header web3={true} />
            <p className={styles.description}>
                Add a row to <Link href={"/database/" + database_id}>
                    <a className={styles.greenlink}>{databaseName}</a>
                </Link>
            </p>
            <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    writeToChain()
                }}
            >
                <JsonForms
                    schema={formSchema}
                    uischema={formUiSchema}
                    data={formData}
                    renderers={materialRenderers}
                    cells={materialCells}
                    onChange={({ errors, data }) => setFormData(data)}
                />
                <button
                    type="submit"
                    className={styles.greenButton}
                    disabled={(isLoading || isIPFSLoading)}
                >
                    {(isLoading || isIPFSLoading) ? 'Minting...' : 'Mint'}
                </button>

                {(isPrepareError || isError) && (
                    <div>Error: {(prepareError || error)?.message.substring(0, 100)}</div>
                )}
            </form>
        </>
    );
};

export default MintRow;

export async function getServerSideProps(context: any) {
    const database_id = context.query._id

    const baseUrl = publicRuntimeConfig.baseUrl
    const res = await fetch(`${baseUrl}/database`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            database_id: database_id
        })
    })
    const database = await res.json()

    // if (!database) {
    //     return {
    //         notFound: true,
    //     }
    // } 

    return { props: { database } }
}
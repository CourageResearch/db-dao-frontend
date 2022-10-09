import { useEffect, useState } from 'react';
import {
    usePrepareContractWrite,
    useContractWrite,
    useNetwork,
} from 'wagmi'
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import pinataSDK from "@pinata/sdk"
import Header, { contractConfig } from '../components/Header';
import Link from 'next/link';
import getConfig from 'next/config'

import initFormSchema from "../data/initFormSchema.json"
import initFormUiSchema from "../data/initFormUiSchema.json"
import initFormData from "../data/initFormData.json"

const { publicRuntimeConfig } = getConfig()

const initDataBaseName = "My DB"

const MintDatabase: NextPage = () => {

    const [databaseName, setDatabaseName] = useState(initDataBaseName)
    const [deposit, setDeposit] = useState(10)

    const [formSchema, setFormSchema] = useState(initFormSchema)
    const [formUiSchema, setFormUiSchema] = useState(initFormUiSchema)
    const [formData, setFormData] = useState(initFormData)
    
    const [ipfsHash, setIpfsHash] = useState<string|undefined>()
    const [isIPFSLoading, setIsIPFSLoading] = useState(false)

    const PINATA_KEY = publicRuntimeConfig.PINATA_KEY
    const PINATA_SECRET = publicRuntimeConfig.PINATA_SECRET
    const pinata = pinataSDK(PINATA_KEY, PINATA_SECRET);
    

    const { chain: activeChain } = useNetwork();
    const explorerUrl = activeChain?.blockExplorers?.default.url
    const exploreName = activeChain?.blockExplorers?.default.name

    const writeToChain = async ()=>{
        const ipfsHash = await uploadToPinata(databaseName)
        console.log(`ipfsHash: ${ipfsHash}`)
        setIpfsHash(ipfsHash)
    }

    async function uploadToPinata(databaseName:string){
        setIsIPFSLoading(true)
        const body = {
            name: databaseName,
            formSchema: formSchema,
            formUiSchema: formUiSchema,
            formData: formData,
        }
    
        const options = {
            pinataMetadata: {
                name: databaseName.substring(0, 200) 
            }
        }
    
        try {
            const result = await pinata.pinJSONToIPFS(body, options)
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
        functionName: 'mintDatabase',
        args: [ipfsHash, deposit],
        enabled: Boolean(ipfsHash),
    });

    const {
        data: txData,
        error: txError,
        isError: isTxError,
        write,
        isLoading: isTxLoading,
        isSuccess: isTxSuccess,
    } = useContractWrite(config);

    useEffect(() => {
        if (isPrepareSuccess) {
            console.log("isPrepareSuccess")
            write?.()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPrepareSuccess]);

    


    return (
        <>
            <Header web3={true}/>

            {!isTxSuccess && <p className={styles.description}>
                Mint a database on any subject for free.
            </p> }

            {!isTxSuccess && <div className="block p-6 rounded-lg shadow-lg bg-white">
                <form
                    className="flex flex-col"
                    onSubmit={(e) => {
                        e.preventDefault()
                        writeToChain()  
                    }}
                >
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">
                            Database Name
                        </label>
                        <input 
                            id="database"
                            type="text" 
                            className={styles.greenInput}
                            aria-describedby="database name"
                            placeholder="Database Name"
                            required={true}
                            onChange={(e) => setDatabaseName(e.target.value)}
                            value={databaseName}
                        />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">
                            Row Deposit (Wei)
                        </label>
                        <input 
                            id="deposit"
                            type="number" 
                            className={styles.greenInput}
                            aria-describedby="row deposit"
                            placeholder="10"
                            onChange={(e) => setDeposit(parseInt(e.target.value))}
                            value={deposit}
                            required={true}
                        />
                        <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
                            The amount someone has to  <a 
                                className={styles.greenlink} 
                                href='https://docs.dbdao.xyz/dbdao/protocol' 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    deposit
                            </a> while their row is under review.
                        </small>
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">
                            Schema
                        </label>
                                    
                        <textarea 
                            id="formSchema"
                            className={styles.greenInput}
                            onChange={(e) => setFormSchema(JSON.parse(e.target.value))}
                            value={JSON.stringify(formSchema)}
                            required={true}
                        />
                        <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
                        The schema prop expects a  <a 
                                className={styles.greenlink} 
                                href='https://jsonforms.io/docs/integrations/react/#schema' 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    JSON Schema value
                            </a> describing the underlying data for the form.
                        </small>
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="formUiSchema" className="form-label inline-block mb-2 text-gray-700">
                            UI Schema
                        </label>
                        <textarea 
                            id="formUiSchema"
                            className={styles.greenInput}
                            onChange={(e) => setFormUiSchema(JSON.parse(e.target.value))}
                            value={JSON.stringify(formUiSchema)}
                            required={true}
                        />
                        <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
                            The uischema is JSON describing the layout of the form <a 
                                className={styles.greenlink} 
                                href='https://jsonforms.io/docs/integrations/react/#uischema' 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    layout of the form
                            </a>. It can contain different UI schema elements, such as layouts and controls.
                            
                        </small>
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="formUiSchema" className="form-label inline-block mb-2 text-gray-700">
                            Data
                        </label>
                        <textarea 
                            id="formUiSchema"
                            className={styles.greenInput} 
                            onChange={(e) => setFormData(JSON.parse(e.target.value))}
                            value={JSON.stringify(formData)}
                            required={true}
                        />
                        <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
                        The data prop represents <a 
                                className={styles.greenlink} 
                                href='https://jsonforms.io/docs/integrations/react/#data' 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    an object
                            </a> containing the data to be rendered by default in the form.
                        </small>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.greenButton}
                        disabled={(isTxLoading || isIPFSLoading)}
                    >
                        {(isTxLoading || isIPFSLoading) ? 'Minting...' : 'Mint'}
                    </button>
                </form>
            </div>}
            {isTxSuccess && (
                <div className="mt-6">
                    <div className={styles.description}>
                        Successfully minted your database.<br/> 
                    </div>
                    <div>
                        Find your newly minted database <Link href="/explore"><a
                            className={styles.greenlink}
                        >here</a></Link>.
                    </div>
                    <div>
                        See the minting transaction on <a 
                                className={styles.greenlink} 
                                target="_blank" 
                            rel="noopener noreferrer" 
                            href={`${explorerUrl}/tx/${txData?.hash}`}
                        >{exploreName}</a>.
                    </div>
                </div>
            )}

            {(isPrepareError || isTxError) && (
                <div>Error: {(prepareError || txError)?.message.substring(0, 80)}</div>
            )}
        </>
  )
}

export default MintDatabase;
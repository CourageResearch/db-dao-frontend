import { useEffect, useState } from 'react';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import {
    useContractWrite,
    usePrepareContractWrite,
    useNetwork,
} from 'wagmi';
import styles from '../../styles/Home.module.css';
import { Contract, Row } from '../../interfaces';
import Header, { contractConfig } from '../../components/Header';
import getConfig from 'next/config'
import Link from 'next/link';
const { publicRuntimeConfig } = getConfig()

const Database = ({ database }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const database_id = database._id
    const databaseName = database.name

    const { chain: activeChain } = useNetwork();
    const [rowId, setRowId] = useState<number | undefined>()

    // const explorerUrl = activeChain?.blockExplorers?.default.url
    // const exploreName = activeChain?.blockExplorers?.default.name

    async function handleRemoveRow(rowId: number) {
        console.log(`handleRemoveRow: ${rowId}`)
        setRowId(rowId)
    }

    const {
        config: configRemoveRow,
        error: prepareErrorRemoveRow,
        isError: isPrepareErrorRemoveRow,
        isSuccess: isPrepareSuccessRemoveRow
    } = usePrepareContractWrite({
        ...contractConfig,
        functionName: 'removeRow',
        args: [rowId],
        enabled: rowId != undefined,
    });

    const {
        data: dataRemoveRow,
        error: errorRemoveRow,
        isError: isErrorRemoveRow,
        write: writeRemoveRow,
        isLoading: isLoadingRemoveRow,
        isSuccess: isSuccessRemoveRow,
    } = useContractWrite(configRemoveRow);

    useEffect(() => {
        if (isPrepareSuccessRemoveRow) {
            console.log("isPrepareSuccessRemoveRow")
            writeRemoveRow?.()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPrepareSuccessRemoveRow]);

    function renderRow(contract: Contract, row: Row, key: number) {

        // other info
        // owner
        // address
        // time

        const rowId = row.rowId
        const data: any = row.data
        const headersData = Object.keys(row.data)

        return (
            <tr key={key} className="bg-white border-b">
                {headersData.map((header, index) => {
                    return (
                        <td key={index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {data[header]}
                        </td>
                    )
                })}
                <td>
                    <button
                        className={styles.greenButton}

                        onClick={() => handleRemoveRow(rowId)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }

    function renderHeader(row: Row) {
        if (!row) {
            return
        }

        const headersData = Object.keys(database.rows[0].data)

        return (
            <thead className="border-b bg-gray-50">
                <tr>
                    {headersData.map((header: any, index: number) => {
                        return (
                            <th scope="col" key={index} className="text-sm font-medium text-gray-900 px-6 py-4">
                                {header}
                            </th>
                        )
                    })}

                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        Action
                    </th>
                </tr>
            </thead>
        )
    }

    return (
        <>
            <Header web3={true} />
            <h1 className={styles.title}>
                {databaseName}
            </h1>
            <Link href={"/mintRow/" + database_id}>
                <a>
                    <h2 className='hover:text-green-500'>Add a row &rarr;</h2>
                </a>
            </Link>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-4 inline-block">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                {renderHeader(database.rows[0])}
                                <tbody>
                                    {database.rows.map((row: Row, index: number) => {
                                        return renderRow(database.contract, row, index)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Database;

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

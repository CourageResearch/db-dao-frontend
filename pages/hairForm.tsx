import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { gql, useMutation } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const { publicRuntimeConfig } = getConfig()
const baseUrl = publicRuntimeConfig.baseUrl

import { useState } from 'react';
import getConfig from 'next/config';

const Jobs: NextPage = () => {

    const INCREMENT_COUNTER = gql`
    # Increments a back-end counter and gets its resulting value
    mutation IncrementCounter {
      currentValue
    }
  `;
  
    //   updateMessage(id: ID!, input: MessageInput): Message


    // const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
    // // let [client, setClient] = useState({} as ApolloClient<any>);

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     const res = await fetch(`${baseUrl}/databases`)

    //     // mutateFunction();
    //     // mutateFunction({ variables: { input: { title: 'test', content: 'test' } } });
    //     // console.log(e.target);
    //     // console.log(e);

    // }

    // const client = new ApolloClient({
    //     uri: 'http://localhost:8000/graphql',
    //     cache: new InMemoryCache(),
    //   });
      
// mutation {
//     createMessage(input: {
//       author: "andy",
//       content: "hope is a good thing",
//     }) {
//       id
//     }
//   }
  
    return (
        <>
            {/* <ApolloProvider client={client}> */}

            <Header web3={false} />

            <form id="rendered-form" 
            action={`${baseUrl}/mintRow`
            }
            encType="multipart/form-data"
            method="POST"
                // onSubmit={handleSubmit}
                >
                    {/* <input type="password" className="form-control" id="password" name="password"/> */}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Your age</label>
                    <input type="text" name="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="30" required/>
                    {/* 0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F */}
                </div>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your VCF</label>
                <textarea rows={4} name="vcf" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Scalpe Picture</label>
                <input name="sampleFile" type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />

                <button type="submit"  className={styles.greenButton}   id="button-1669096502476-0">Submit</button>
            </form>
            {/* </ApolloProvider> */}

        </>
    );
};

export default Jobs;

// submitForm(e) {
//     e.preventDefault();

//     this.props.mutate({
//        variables: {
//          name: this.state.name,
//          genre: this.state.genre,
//          author: this.state.author,
//        }
//     }).catch(res => {
//         const errors = res.graphQLErrors.map(err => err.message);
//         this.setState({ errors });
//     });
//   }

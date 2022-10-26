import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Link from 'next/link';

const videos = [
    // {
    //     title: '',
    //     ytid: '',
    // },
    {
        title: 'CoinList Seed Demo Day VIII',
        ytid: 'guSYjCfx5LA',
    },
    {
        title: 'Climate Workshops and Talks - Bogota, Colombia',
        ytid: 'sY6jfUZmDdo',
    },
    {
        title: 'DB DAO at InfraCon',
        ytid: 'jZ4COFixKQo',
    },
    {
        title: 'Curate to EARN - with Michael Fischer Founder Curate DAO',
        ytid: 'KqlOVbdZnMk',
    },
    {
        title: 'Future Vision for Web3 Social Network',
        ytid: 'aujdWZRpLXk',
    },  
    {
        title: 'What is Social Media for Web3?',
        ytid: 'tTLe1pyNQdI',
    },
    {
        title: "Founders' Talk: What is Web3?",
        ytid: 'YM7B2ay67_g',
    },
    {
        title: 'Exploring curate-to-earn with Michael Fischer (CurateDAO)',
        // nameAuthor: '',
        ytid: 'DRvdGZxYjWc',
    },
    {
        title: 'CurateDAO x Arbitrum AMA June 16, 2022',
        ytid: 'mco3ZFcZLAI',
    },
    {
        title: 'Expert Choice: Top 40 DAOs in 2022',
        // nameAuthor: '',
        ytid: 'aEhuuQcVAoQ',
    },
    {
        title: 'TUTORIAL | How to mint row on CurateDAO Testnet Phase 3',
        // nameAuthor: 'Chidubem',
        // time: 'April 25, 2022',
        ytid: "88QmVtMCFps"
    },
    {
        title: 'CurateDAO / ОБЗОР ПРОЕКТА',
        // nameAuthor: 'Inna555',
        // time: 'April 18, 2022',
        ytid: "P1Gg527qlsI"
    },
    {
        title: 'CurateDAO: review and news',
        // nameAuthor: 'vinco',
        // time: 'April 17, 2022',
        ytid: "Ksf8KKjdTso"
    },
    {
        title: 'CurateDAO новейший Curate to Earn проект | Курируй и зарабатывай',
        // nameAuthor: 'CryptoPositive',
        // time: 'April 17, 2022',
        ytid: "ELFhtmdYUSU"
    },
    {
        title: 'CurateDAO #10 ЛЕГКИЙ ТЕСТНЕТ | WL УСПЕВАЕМ ПОПАСТЬ',
        // nameAuthor: 'Ismail',
        // time: 'April 14, 2022',
        ytid: "c4Y9QHFDmFg"
    },
    {
        title: "#66 - Construire une ville avec Praxis Society, Ray Dalio et l'ordre de Malte, CurateDAO lève $6.8m",
        // nameAuthor: 'The Farmspot',
        // time: 'Match 14, 2022',
        ytid: "O0coQr6Qa9A"
    },
    {
        title: 'CurateDAO #7 Новый криптовалютный проект зарабатывайте деньги',
        // nameAuthor: 'Smile',
        // time: 'April 10, 2022',
        ytid: "qZOo-TdQbgI"
    },
    {
        title: '[#265] Обзоры: Amun DeFi, Solapoly, Gridlock, MetaEngine, HowRare, Krypto Kronic, Suites, Curate DAO',
        // nameAuthor: 'Cheesus',
        // time: 'Match 11, 2022',
        ytid: "rHaxx4seD0I"
    },
    // {
    //     title: 'CurateDAO "Curate-to-earn"',
    //     nameAuthor: 'Business Shower',
    //     time: 'March 9, 2022',
    //     ytid: "1PX5F8MBSeA"
    // },
    {
        title: 'معرفی پروژه CurateDAO',
        // nameAuthor: 'تاپ ارز دیجیتال',
        // time: 'March 15, 2022',
        ytid: "CcNhVgf4SBY"
    },
    {
        title: 'Знакомство с проектом CurateDAO | Новый криптовалютный проект',
        // nameAuthor: 'CryptoXYI',
        // time: 'March 13, 2022',
        ytid: "UirRSscZcRI"
    },
    {
        title: 'How to connect your @MetaMask to @CurateDAO using the @avalancheavax network',
        // nameAuthor: 'arich',
        // time: 'March 22, 2022',
        ytid: "p0guraOFWUI"
    },
    // {
    //     title: 'How the Protocol works',
    //     nameAuthor: 'CurateDAO',
    //     time: 'March 18, 2022',
    //     ytid: "aSlCWt7dQgc"
    // },
    // {
    //     title: 'What is CurateDAO?',
    //     nameAuthor: 'CurateDAO',
    //     time: 'March 16, 2022',
    //     ytid: "cYEQnEuk_uc"
    // },
    // {
    //     title: 'Metamask Tutorial',
    //     nameAuthor: 'CurateDAO',
    //     time: 'March 15, 2022',
    //     ytid: "2LN2CZwqoTc"
    // },

]

function renderVideo(item:any, index:number){
    const url = `https://www.youtube.com/watch?v=${item.ytid}`
    const thumbnail = `https://img.youtube.com/vi/${item.ytid}/0.jpg`

    return <div key={index} className="col-sm-4">
        <a href={ url } target='_blank' rel="noopener noreferrer">
            <img className="img-fluid" src={ thumbnail } alt="" />
        </a>
        <div className='mb-4'>
            <Link href={ url } 
                // style={{
                //     overflow: 'hidden',
                //     textOverflow: 'ellipsis',
                //     display: '-webkit-box',
                //     WebkitLineClamp: 2,
                //     WebkitBoxOrient: 'vertical',
                //     fontSize: '.75rem',
                //     fontFamily: 'arial',
                //     fontWeight: 500,
                //     color: '#000',
                //     backgroundColor: '#fff',
                // }}
            >
                <a className={styles.greenlink} >
                    {item.title}
                </a>
            </Link>
        </div>
    </div>
}

const Video: NextPage = () => {
    return (
        <>
            <Header web3={false} />
            <div className={styles.description}>
                Videos
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                { videos.map(renderVideo) }
            </div>
        </>
    );
};

export default Video;
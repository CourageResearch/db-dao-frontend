import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Jobs: NextPage = () => {

    const data = (
        [
            {
                title: 'Engineering',
                description: "You get a first version working in a third of the time that most competent people think possible.",
            },
            {
                title: 'Business',
                description: "You have the originality to create value for others and then the ability to extract a fraction of their money.",
            },
            {
                title: 'Design',
                description: 'You create designs that are different, iconic, and simple, yet no one has ever thought of them before.',
            },
            {
                title: 'Community/Test',
                description: "You make sure everyone is happy and having a good time first, then listen to hear what they want next.",
            },
            {
                title: 'Snowflake',
                description: "You go to a sushi restaurant and order the crazy stuff that isn't even on the menu, and that is how find a job too.",
            },            
        ]
    )


    return (
        <div className="container mx-auto w-[35rem]">

            <Header web3={false}/>

            <main className={styles.main}>
                <div className={styles.description}>
                    Join Something Big
                </div>

                <div className="my-3">
                    CurateDAO seeks talented and original thinkers to help pioneer databases on web3.
                    Positions can be either remote or in NYC.
                    Simplicity is important so we are going to practice what we preach and keep this short.
                </div>

                {
                    data.map((item, index) => (
                        <div key={index} className="my-3">
                            <div className="font-bold">{item.title}</div>
                            <div>{item.description}</div>

                            <a href="https://forms.gle/gfiqjXpwmUH1Rycq9" target="_blank" rel="noreferrer" >
                                <button className={styles.greenButton}>
                                    Apply
                                </button>
                            </a>
                        </div>
                    ))
                }

            </main>
            <Footer/>
        </div>
    );
};

export default Jobs;
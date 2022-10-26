import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import pic1 from '../public/michael.jpg'
import pic2 from '../public/michael.jpg'
import pic3 from '../public/michael.jpg'
// import Image from 'next/image'

const Team: NextPage = () => {

    const data = (
        [
            {
                handle: 'Dr. Michael Fischer',
                title: 'Founder',
                image: pic1,
                bio: "Just finished my PhD in Computer Science at Stanford.",
            },
            {
                handle: 'Dr. Michael Fischer',
                title: 'CTO',
                image: pic2,
                bio: "",
            },
            {
                handle: 'Dr. Michael Fischer',
                title: 'ZK Engineer',
                image: pic3,
                bio: "",
            },
        ]
    )
      
    return (
        <>
            <Header web3={false} />

            <div className={styles.description}>
                Team
            </div>

            <div className="my-3">
            </div>

            {
                data.map((item, index) => (
                    <div key={index} className="my-3">
                        {/* <Image 
                            src={michael}
                            alt={item.handle}
                            width={500}
                            height={500}
                        /> */}
                        <div className="font-bold">{item.handle}</div>
                        <div className=''>{item.title}</div>
                        {/* <div>{item.bio}</div> */}
                    </div>
                ))
            }
        </>
    );
};

export default Team;
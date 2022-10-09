import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { useForm, ValidationError } from '@formspree/react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

const Contact: NextPage = () => {
    const FORMSPREE_KEY = publicRuntimeConfig.FORMSPREE_KEY
    const [state, handleSubmit] = useForm(FORMSPREE_KEY);

    return (
        <>
            <Header web3={false} />
            <div className={styles.description}>
                Get in touch about something
            </div>

            {!state.succeeded &&
                <form onSubmit={handleSubmit} >
                    <div className="form-group mb-6">
                        <label htmlFor="formUiSchema" className="form-label inline-block mb-2 text-gray-700">
                            Your name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={styles.greenInput}
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="formUiSchema" className="form-label inline-block mb-2 text-gray-700">
                            Your email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className={styles.greenInput}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="formUiSchema" className="form-label inline-block mb-2 text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            required
                            className={styles.greenInput}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" className={styles.greenButton} >
                        Send message
                    </button>
                </form>
            }

            {state.succeeded &&
                <div className="">
                    <div className="text-2xl font-bold mt-10 mb-4">Thanks for your message!</div>
                    <div className="text-lg mb-4">We&apos;ll get back to you as soon as we can.</div>
                </div>
            }
        </>
    );
};

export default Contact;
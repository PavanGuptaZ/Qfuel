import styles from '../css/HomePage.module.css';
import Logo from '../assets/images/Qfuel.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";

export const HomePage = () => {
    return (
        <div className={styles.HomePageFullBox}>
            <section className={styles.SectionBox}>
                <div className={styles.LogoBox}>
                    <img src={Logo} alt="" width={"100%"} />
                </div>
                <div className={styles.tagLine}>
                    &quot;Fuel Your Day with Wisdom: <b>Qfuel</b> - Where Quotes Ignite Inspiration!&quot;
                </div>
                <div className={styles.SliceBox}>
                    <div className={styles.title}>About Qfuel</div>
                    <div className={styles.desc}>Welcome to Qfuel, your daily source of inspiration! Qfuel is a unique platform designed to ignite your day with a burst of motivation, wisdom, and positivity. Our mission is to provide you with a daily dose of insightful quotes that fuel your mind and spirit.</div>
                </div>
            </section>
            <div className={styles.line}></div>
            <div className={styles.ImageBox + " " + styles.style01}>
                <img src={'https://source.unsplash.com/rMYGCAI_-zU'} className={styles.image} alt="" width={"100%"} />
            </div>
            <section className={styles.SectionBox}>
                <div className={styles.SliceBox}>
                    <div className={styles.title}>What We Offer:</div>
                    <ul className={styles.Points}>
                        <li> Random Quotes: Explore a collection of handpicked quotes that cover a wide range of topics, from motivation and success to love and happiness.</li>
                        <li> Daily Inspiration: Start your day on a positive note by discovering three randomly generated quotes that are sure to uplift your spirits.</li>
                        <li>Share the Wisdom: Spread the inspiration with your friends and family by easily sharing your favorite quotes on social media.</li>
                    </ul>
                </div>
            </section>
            <div className={styles.line}></div>
            <div className={styles.ImageBox + " " + styles.style02}>
                <img src={'https://source.unsplash.com/Y_LgXwQEx2c'} className={styles.image} alt="" width={"100%"} />
            </div>
            <section className={styles.SectionBox}>
                <div className={styles.SliceBox}>
                    <div className={styles.title}>How Qfuel Works:</div>
                    <div className={styles.desc}>Qfuel makes it easy to discover and share meaningful quotes. Simply visit our website, and with the click of a button, unlock a trio of thought-provoking quotes that are tailored to brighten your day. Whether you&apos;re looking for a boost of motivation, a dose of laughter, or words of wisdom, Qfuel has you covered.</div>
                </div>
            </section>
            <div className={styles.line}></div>
            <div className={styles.ImageBox + " " + styles.style03}>
                <img src={'https://source.unsplash.com/U2eUlPEKIgU'} className={styles.image} alt="" width={"100%"} />
            </div>
            <section className={styles.SectionBox}>
                <div className={styles.SliceBox}>
                    <div className={styles.title}>Join the Qfuel Community:</div>
                    <div className={styles.desc}>Become part of the Qfuel community by following us on social media. Share your favorite quotes, engage with other users, and let the power of words create a positive ripple effect in your life.
                    </div>
                </div>
            </section>
            <div className={styles.line}></div>
            <div className={styles.ImageBox + " " + styles.style04}>
                <img src={'https://source.unsplash.com/5d20kdvFCfA'} className={styles.image} alt="" width={"100%"} />
            </div>
            <section className={styles.SectionBox}>
                <div className={styles.SliceBox}>
                    <div className={styles.title}>Fuel Your Journey with Qfuel:</div>
                    <div className={styles.desc}>Let Qfuel be the source of inspiration that powers your journey. Start each day with a fresh perspective and a renewed spirit. Join us in spreading the light of wisdom and positivity!
                        Feel free to customize and adjust the content based on your vision for Qfuel. Good luck with your website!
                    </div>
                </div>
            </section>
            <div className={styles.line}></div>
            <section className={styles.SectionBox}>
                <div className={styles.socialLinksBox}>
                    <a href="https://github.com/PavanGuptaZ" target="_blank" rel="noreferrer"
                        className={styles.linkAnchor} style={{ color: 'black' }}><AiFillGithub style={{ fontSize: "5rem" }} /> GitHub</a>
                    <a href="https://twitter.com/pavangupta1234" target="_blank" rel="noreferrer"
                        className={styles.linkAnchor} style={{ color: 'black' }}><FaXTwitter style={{ fontSize: "5rem" }} /> Twitter-X</a>
                    <a href="https://www.linkedin.com/in/pavan-gupta-68b21b134" target="_blank" rel="noreferrer"
                        className={styles.linkAnchor} ><AiFillLinkedin style={{ fontSize: "5rem", color: "#0A66C2" }} /> Linkedin</a>
                </div>
            </section>
            <div className={styles.line}></div>
            <section className={styles.SectionBox}>
                <b>--- Qfuel WebSite - Fuel Your Day ---</b>
            </section>
        </div>
    )
}

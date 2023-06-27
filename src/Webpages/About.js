import { Helmet } from "react-helmet";

const About = () => {
    return (
        <><Helmet>
            <title>About • Oribia</title>
            <meta property="og:title" content="About • Oribia" />
            <meta name="description" content="A biography about me." />
            <meta property="og:description" content="A biography about me." />
        </Helmet>
             {/* <!-- Main Body --> */}
            <div className="MainBody">
                {/* <!-- Main Title --> */}
                <div className="MainBodyH1">About Me</div>
                <div className="MainBodyH2">A biography about me. </div>
                {/* <!-- Project Boxs --> */}
                <br />
                <br />
                <div className="about-box-containers">
                    <div className="about-box-nolink">
                        <div className="about-box-col-left-nolink">
                            <div className="about-box-png">
                                <img id="selfie" src="../Img/Selfie.jpg" width="162" height="260" alt="Selfie" />
                            </div>
                        </div>
                        <div className="vl"></div>
                        <div className="about-box-col-right-nolink">
                            <div className="about-box-H1-nolink">
                                Biography
                            </div>
                            <div className="about-box-H2-nolink">Hi, I'm Olivia (She/Her). I am a aspiring trans girl software developer who is a freshman in college (2027) majoring in Computer Science. I've developed a mulitude of different projects ranging from video games and video game modifications, to websites and discord bots. Some notable projects incude my Minecraft mod TrinityWeapons (Over 350k Downloads), and my Discord bot Meii. Ive learned a bunch of different programming languages including but not limited too, Python, C#, Java, HTML/CSS, Javascript, and SQL. Outside of tech I also love VR, VRChat, music, and Psychology.</div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <a href="../MiscFiles/MainResume.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="resumebox">
                            <div className="about-box">
                                <div className="about-box-col-left">
                                    <div className="about-box-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="about-box-svg" viewBox="0 0 16 16">
                                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="about-box-col-right">
                                    <div className="about-box-H1">
                                        Resume
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                        </svg>
                                    </div>
                                    <div className="about-box-H2">For more information, have a look at my resume.</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div></>
      );
}
 
export default About;

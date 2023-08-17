import { Helmet } from "react-helmet";

const About = () => {
    const AboutBoxAnimation1 = {
        animationDelay: '0.20s'
    }
    const AboutBoxAnimation2 = {
        animationDelay: '0.25s'
    }
    const Email = "olivialyleknight@gmail.com"
    const Subject = "Oribia.Dev%20Contact"
    const Body = "Please%20tell%20me%20what%20you're%20contacting%20me%20about.%20Be%20sure%20to%20be%20specific%20and%20to%20include%20your%20preferred%20method%20of%20contact!"
    const MailString = `mailto:${Email}?subject=${Subject}&body=${Body}`
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
                            <div className="about-box-H2-nolink">Hi, I'm Olivia (She/Her). I am a aspiring trans girl software developer whos a freshman in college (2027) majoring in Computer Science. I've developed a mulitude of different projects ranging from video games and video game modifications, to websites and discord bots. Some notable projects incude my Minecraft mod TrinityWeapons (Over 350k Downloads), and my Discord bot Meii. Ive learned a bunch of different programming languages including but not limited too, Python, C#, Java, HTML/CSS, Javascript, and SQL. Outside of tech I also love VR, VRChat, music, and Psychology.</div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <a href="../MiscFiles/MainResume.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="AboutBoxAnimationHandler" style={AboutBoxAnimation1}>
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
                        </div>
                    </a>
                    <br />
                    <br />
                    <a href={MailString} target="_blank" rel="noopener noreferrer">
                        <div className="AboutBoxAnimationHandler" style={AboutBoxAnimation2}>
                            <div className="contactbox">
                                <div className="about-box">
                                    <div className="about-box-col-left">
                                        <div className="about-box-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="about-box-svg" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="about-box-col-right">
                                        <div className="about-box-H1">
                                            Contact Me
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                        </div>
                                        <div className="about-box-H2">If you would like to reach out, feel free to contact me!</div>
                                    </div>
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

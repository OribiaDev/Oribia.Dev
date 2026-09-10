import ProjectBubble from "../components/ProjectBubble.jsx";

const projects = () => {

    return ( 
        <div className="projectsContent">
            <div className="projectsTitleContainer">
                <div className="projectsTitle">Projects</div>
                <div className="projectsSubTitle">I'm addicted to coding {"</3"}</div>
            </div>
            <div className="projectsContainer">
                <div className="projectBubbleAnimationContainer" id='first'>
                    <ProjectBubble>
                        <div className="projectBubbleContent">
                            <div className="projectImageContainer">
                                <img src="/projectImages/meii.png" className="projectImage" /> 
                            </div>
                            <div className="projectTextContainer">
                                <div className="projectTitle">Meii</div>
                                <div className="projectDate">March 2023 - Current</div>
                                <div className="badgeContainer">
                                    <div className="badge">React</div>
                                    <div className="badge">Node.JS</div>
                                    <div className="badge">Discord.JS</div>
                                    <div className="badge">MongoDB</div>
                                </div>
                                <div className="projectText">
                                    A completely free Discord anonymous confession and emote bot. Originally built to fight paywalled competitors, Meii grew into a popular free alternative used by 12k+ servers.
                                </div>
                            </div>
                            <div className="projectButtonContainer">
                                <button className="projectButton" onClick={() => window.open("https://meii.bot/", "_blank")}>
                                    View Project
                                </button>
                            </div>
                        </div>     
                    </ProjectBubble>  
                </div>  
                <div className="projectBubbleAnimationContainer" id='second'>
                    <ProjectBubble>
                        <div className="projectBubbleContent">
                            <div className="projectImageContainer">
                                <img src="/projectImages/sukigifs.png" className="projectImage" /> 
                            </div>
                            <div className="projectTextContainer">
                                <div className="projectTitle">SukiGifs</div>
                                <div className="projectDate">Augest 2026 - Current</div>
                                <div className="badgeContainer">
                                    <div className="badge">React</div>
                                    <div className="badge">Node.JS</div>
                                    <div className="badge">Express.JS</div>
                                </div>
                                <div className="projectText">
                                    A free API providing anime GIF roleplaying emotes for Discord bots, anime websites, and more. It has 85+ endpoints with over 2.5k+ GIFS. 
                                </div>
                            </div>
                            <div className="projectButtonContainer">
                                <button className="projectButton" onClick={() => window.open("https://sukigifs.xyz/", "_blank")}>
                                    View Project
                                </button>
                            </div>
                        </div>     
                    </ProjectBubble>  
                </div> 
                <div className="projectBubbleAnimationContainer" id='third'>
                    <ProjectBubble>
                        <div className="projectBubbleContent">
                            <div className="projectImageContainer">
                                <img src="/projectImages/oribiadevold.png" className="projectImage" /> 
                            </div>
                            <div className="projectTextContainer">
                                <div className="projectTitle">Old Oribia.Dev</div>
                                <div className="projectDate">April 2023 - September 2026</div>
                                <div className="badgeContainer">
                                    <div className="badge">React</div>
                                    <div className="badge">Node.JS</div>
                                </div>
                                <div className="projectText">
                                    Previous iteration of my portfolio site Oribia.Dev. Check it out to see how far i've come!
                                </div>
                            </div>
                            <div className="projectButtonContainer">
                                <button className="projectButton" onClick={() => window.open("https://old.oribia.dev/", "_blank")}>
                                    View Project
                                </button>
                            </div>
                        </div>     
                    </ProjectBubble>  
                </div> 
                <div className="projectBubbleAnimationContainer" id='forth'>
                    <ProjectBubble>
                        <div className="projectBubbleContent">
                            <div className="projectImageContainer">
                                <img src="/projectImages/trinityweapons.png" className="projectImage" /> 
                            </div>
                            <div className="projectTextContainer">
                                <div className="projectTitle">TrinityWeapons</div>
                                <div className="projectDate">Augest 2019 - November 2022</div>
                                <div className="badgeContainer">
                                    <div className="badge">Java</div>
                                    <div className="badge">Forge</div>
                                </div>
                                <div className="projectText">
                                    A medieval weapons mod for Minecraft 1.16.5–1.19.2 featuring 11 unique weapons, with over 360k downloads.
                                </div>
                            </div>
                            <div className="projectButtonContainer">
                                <button className="projectButton" onClick={() => window.open("https://www.curseforge.com/minecraft/mc-mods/trinityweapons", "_blank")}>
                                    View Project
                                </button>
                            </div>
                        </div>     
                    </ProjectBubble>  
                </div>    
                <div className="projectBubbleAnimationContainer" id='fith'>
                    <ProjectBubble>
                        <div className="projectBubbleContent">
                            <div className="projectImageContainer">
                                <img src="/projectImages/placeholder.png" className="projectImage" /> 
                            </div>
                            <div className="projectTextContainer">
                                <div className="projectTitle">Future Project Placeholder</div>
                                <div className="projectDate">Never Gonna - Give You Up</div>
                                <div className="badgeContainer">
                                    <div className="badge">Trans Rights {"<3"}</div>
                                </div>
                                <div className="projectText">
                                    Placeholder for a future project.
                                </div>
                            </div>
                            <div className="projectButtonContainer">
                                <button className="projectButton" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}>
                                    View Project
                                </button>
                            </div>
                        </div>     
                    </ProjectBubble>  
                </div>  
            </div>
            
        </div>
     );
}
 
export default projects;
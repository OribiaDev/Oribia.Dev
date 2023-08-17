import { Helmet } from "react-helmet"

const Projects = () => {
    const ProjectBoxAnimation1 = {
        animationDelay: '0.13s'
    }
    const ProjectBoxAnimation2 = {
        animationDelay: '0.18s'
    }
    const ProjectBoxAnimation3 = {
        animationDelay: '0.23s'
    }
    const ProjectBoxAnimation4 = {
        animationDelay: '0.28s'
    }
    const ProjectBoxAnimation5 = {
        animationDelay: '0.33s'
    }
    return (
        <><Helmet>
            <title>Projects • Oribia</title>
            <meta property="og:title" content="Projects • Oribia" />
            <meta name="description" content="A list of all my projects :3" />
            <meta property="og:description" content="A list of all my projects :3" />
        </Helmet><div className="MainBody">
                {/* <!-- Main Title --> */}
                <div className="MainBodyH1">Projects</div>
                <div className="MainBodyH2">A list of my projects :3</div>
                {/* <!-- Project Boxs --> */}
                <div className="project-box-containers">
                    <br />
                    <br />
                    <a href="../">
                        <div className="ProjectAnimationHandler" style={ProjectBoxAnimation1}>
                            <div className="project-box">
                                <div className="project-box-col-left">
                                    <div className="project-box-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="project-box-svg" viewBox="0 0 16 16">
                                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="project-box-col-right">
                                    <div className="project-box-H1">
                                        <div className="TitleContainer">
                                            <div className="project-box-col-left-inner">
                                                <div className="ProjectTitle" id="oneline">
                                                    oribia.dev
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                            </div>
                                            <div className="project-box-col-right-inner">
                                                <div className="BadgesContainer">
                                                    <div className="Badge" id="ReactJS">React JS</div>
                                                    <div className="Badge" id="CSS3">CSS3</div>
                                                    <div className="Badge" id="LastFMAPI">Last.FM API</div>
                                                    <div className="BadgeSpacer"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-box-H2">You're currently here!</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <br />
                    <br />
                    <a href="https://meiibot.xyz" target="_blank" rel="noopener noreferrer">
                        <div className="ProjectAnimationHandler" style={ProjectBoxAnimation2}>
                            <div className="project-box">
                                <div className="project-box-col-left">
                                    <div className="project-box-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="project-box-svg" viewBox="0 0 16 16">
                                            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="project-box-col-right">
                                    <div className="project-box-H1">
                                        <div className="TitleContainer">
                                            <div className="project-box-col-left-inner">
                                                <div className="ProjectTitle">
                                                    Meii
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                            </div>
                                            <div className="project-box-col-right-inner">
                                                <div className="BadgesContainer">
                                                    <div className="Badge" id="MongoDB">MongoDB</div>
                                                    <div className="Badge" id="NodeJS">Node.JS</div>
                                                    <div className="Badge" id="Servers">330+ Servers</div>
                                                    <div className="BadgeSpacer" id="Meii"> </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="project-box-H2">A multipurpose confession Discord bot.</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <br />
                    <br />
                    <a href="https://www.curseforge.com/minecraft/mc-mods/trinityweapons" target="_blank" rel="noopener noreferrer">
                        <div className="ProjectAnimationHandler" style={ProjectBoxAnimation3}>
                            <div className="project-box">
                                <div className="project-box-col-left">
                                    <div className="project-box-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="project-box-svg" viewBox="0 0 16 16">
                                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="project-box-col-right">
                                    <div className="project-box-H1">
                                        <div className="TitleContainer">
                                            <div className="project-box-col-left-inner">
                                                <div className="ProjectTitle" id="oneline">
                                                    TrinityWeapons
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                            </div>
                                            <div className="project-box-col-right-inner">
                                                <div className="BadgesContainer">
                                                    <div className="Badge" id="Java">Java</div>
                                                    <div className="Badge" id="Forge">Forge</div>
                                                    <div className="Badge" id="Downloads">350k+ Downloads</div>
                                                    <div className="BadgeSpacer" id="Trinity"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-box-H2">A popular Minecraft weapons mod.</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <br />
                    <br />
                    <a href="https://dm-helper.oribia.dev/" target="_blank" rel="noopener noreferrer">
                        <div className="ProjectAnimationHandler" style={ProjectBoxAnimation4}>
                            <div className="project-box">
                                <div className="project-box-col-left">
                                    <div className="project-box-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="project-box-svg" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="project-box-col-right">
                                    <div className="project-box-H1">
                                        <div className="TitleContainer">
                                            <div className="project-box-col-left-inner">
                                                <div className="ProjectTitle">
                                                    DM-Helper
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                            </div>
                                            <div className="project-box-col-right-inner">
                                                <div className="BadgesContainer">
                                                    <div className="Badge" id="ReactJS">React JS</div>
                                                    <div className="Badge" id="CSS3">CSS3</div>
                                                    <div className="BadgeSpacer"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-box-H2">An AutoZone store visit email generator.</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <br />
                    <br />
                    <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                        <div className="ProjectAnimationHandler" style={ProjectBoxAnimation5}>
                            <div className="project-box">
                                <div className="project-box-col-left">
                                    <div className="project-box-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="project-box-svg" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="project-box-col-right">
                                    <div className="project-box-H1">
                                        <div className="TitleContainer">
                                            <div className="project-box-col-left-inner">
                                                <div className="ProjectTitle" id="oneline">
                                                    Placeholder Title
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="link-chain" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                            </div>
                                            <div className="project-box-col-right-inner">
                                                <div className="BadgesContainer">
                                                    <div className="Badge" id="TransRights">Trans Rights &lt;3</div>
                                                    <div className="BadgeSpacer"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-box-H2">Future Project Placeholder</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div></>
     );
}
 
export default Projects;
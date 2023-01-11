import React from "react";
const Footer=()=>{
    return(
        <footer>
             <div className="footer-about">
                <div >
                    <ul className="footer-contact">
                        <li>Contact & Proyects: </li>
                    </ul>
                </div>

                <div className="footer-images">
                    <div className="img-color">
                        <a href="https://github.com/NachoDaCosta">
                            <img src="./imgs/white-github.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="img-color">
                        <a href="https://discordapp.com/users/NachoDaCosta#0316">
                            <img src="./imgs/white-discord.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="img-color">
                        <a href="https://www.linkedin.com/in/juan-da-costa/">
                            <img src="./imgs/linkedin.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
import { socialLinks } from "../data";

export const Footer = () => {
    return (
        <footer>
            <div className="content-wrapper">
                <div className="full-width">
                    <div id="contact-info">
                        <h3>Let's Connect</h3>
                        <div className="half-width">
                            <div className="contact">
                                <h4>Hire me</h4>
                                <address>
                                    <p>
                                        Phone: 808-453-0482
                                        <br />
                                        Email: garciacoding2021@gmail.com
                                    </p>
                                </address>
                            </div>
                        </div>
                        <div className="half-width">
                            <div className="social">
                                <h4>Social</h4>
                                <div className="social-icons">
                                    {socialLinks.map((link) => {
                                        return (
                                            <p key={link.id}>
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <i
                                                        className={link.icon}
                                                    ></i>
                                                </a>
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="half-width">
                            <div className="meet-up">
                                <h4>Meet me</h4>

                                <p>Portland, Maine</p>
                                <p>Let's grab a cup of coffee!</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- footer content ends --> */}
                </div>
            </div>
            {/* <!--footer content-wrapper ends--> */}
            <div className="copyright">
                <p> Copyright {new Date().getFullYear()} | Vanesa Garcia</p>
            </div>
        </footer>
    );
};

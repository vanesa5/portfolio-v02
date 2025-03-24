import bioImage from "../img/vanesa-profile.jpeg";

export const About = () => {
    return (
        <section id="about">
            <div class="content-wrapper">
                <div class="full-width">
                    <img src={bioImage} alt="Vanesa Profile" />
                    <h2>Hello! I'm Vanesa Garcia.</h2>
                    <h4>
                        As a front-end developer, I specialize in transforming
                        static websites into clean, responsive, and engaging
                        digital experiences. My passion for problem-solving
                        started in my teenage years, and after a career in
                        teaching, I found my true calling in web development.
                    </h4>
                    <p>
                        When I’m not coding, I love spending time
                        outdoors—walking along the beach or harvesting fresh
                        produce from our farm with my kids. With a keen eye for
                        design and user experience, I bring creativity and
                        precision to every project.
                    </p>
                    <p class="last-par">Looking foward to working together!</p>
                </div>
            </div>
        </section>
    );
};

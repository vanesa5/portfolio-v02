import bioImage from "../img/vanesa-profile.jpeg";

export const About = () => {
    return (
        <section id="about">
            <div class="content-wrapper">
                <div class="full-width">
                    <img src={bioImage} alt="Vanesa Profile" />
                    <h2>Hello! I'm Vanesa Garcia.</h2>
                    <h4>
                        I am a front end developer that enjoys transforming
                        static websites to clean responsive sites.
                    </h4>
                    <p>
                        The interest in problem-solving computer issues arose in
                        my early teenage years. It wasn't until I was done with
                        teaching when I took the path to web development. When
                        I’m away from my computer, I enjoy being outdoors
                        walking to the beach, and harvesting from our farm with
                        my son.
                    </p>
                    <p class="last-par">Looking foward to working together!</p>
                </div>
            </div>
        </section>
    );
};

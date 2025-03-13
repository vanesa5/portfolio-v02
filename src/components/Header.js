import { pageLinks } from "../data";

export const Header = () => {
    return (
        <header>
            <div class="content-wrapper">
                <nav>
                    <ul>
                        {pageLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={link.href} id={link.class}>
                                        {link.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <h1>Hi there, I'm Vanesa Garcia!</h1>
                <h2>Front End Developer</h2>
                <p>
                    Building seamless web experiences that connect data, design,
                    and impact, empowering communities and driving meaningful
                    change.
                </p>
            </div>
        </header>
    );
};

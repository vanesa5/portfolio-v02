import { skills } from "../data";

export const Skills = () => {
    return (
        <section id="skills">
            <div className="content-wrapper">
                <h2>Skills</h2>
                <div className="code-skills">
                    {skills.map((skill) => {
                        return (
                            <article key={skill.id}>
                                <i className={skill.icon}>{skill.text}</i>
                                <p>{skill.info}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

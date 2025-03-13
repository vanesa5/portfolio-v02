import { projects } from "../data";

export const Projects = () => {
    return (
        <section id="projects">
            <div class="content-wrapper">
                <h2>Projects</h2>

                <div class="full-width">
                    {projects.map((project) => {
                        return (
                            <div class="fifth-width" key={project.id}>
                                <figure>
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    </a>
                                </figure>
                                <h3>{project.title}</h3>
                                <p>{project.info}</p>
                                <p>
                                    <span>Skills:</span> {project.skills}
                                </p>
                                <p>
                                    <span>Tools:</span> {project.tools}
                                </p>
                                <a
                                    class="class-project"
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Page
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

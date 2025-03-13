import { tools } from "../data";

export const Tools = () => {
    return (
        <section id="tools">
            <div className="content-wrapper">
                <h2>Tools</h2>

                <div className="code-tools">
                    {tools.map((tool) => {
                        return (
                            <article key={tool.id}>
                                <i className={tool.icon}>{tool.text}</i>
                                <p>{tool.info}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

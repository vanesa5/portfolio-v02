import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";

function App() {
    return (
        <div className="wrapper">
            <Header />

            {/* <!--Start of Main--> */}
            <main>
                {/* <!--Start of Project section--> */}
                <Projects />

                {/* <!--Start of Skills section--> */}
                <Skills />

                {/* <!--End of Skills section--> */}

                {/* <!--Start of Tools section--> */}
                <Tools />
                {/* <!--End of Tools section--> */}

                {/* <!--Start of About section--> */}
                <About />
                {/* <!--End of About section--> */}
            </main>
            {/* <!--End of Main--> */}

            {/* <!--Start of Footer--> */}
            <Footer />
            {/* <!--End of Footer--> */}
        </div>
    );
}

export default App;

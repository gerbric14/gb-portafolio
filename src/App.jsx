import {
  Navbar,
  Hero,
  Contact,
  Footer,
  Technologies,
  Projects,
} from "./components";
import styles from "./data/styles";

const App = () => (
  <div className="bg-primarygb w-full overflow-hidden">
    <div div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
        {/* <Technologies /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

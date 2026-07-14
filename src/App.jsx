import {
  Navbar,
  Hero,
  Contact,
  Footer,
  Technologies,
  Projects,
  ScrollToTop,
  ScrollProgress,
} from "./components";
import styles from "./data/styles";

const App = () => (
  <div className="w-full">
    <div className="bg-noise fixed inset-0 -z-10 pointer-events-none" />
    <ScrollProgress />
    <Navbar />
    <div className="overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Technologies />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
    <ScrollToTop />
  </div>
);

export default App;

import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { About } from "./components/about";
import { NavBar } from "./components/navbar";
import { Project } from "./components/project";
import { Skills } from "./components/skill";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <About></About>
          <Skills></Skills>
          <Project></Project>
          <Contact></Contact>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;

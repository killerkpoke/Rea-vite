import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { YourSelf } from "./components/your-face";
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
          <YourSelf></YourSelf>
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

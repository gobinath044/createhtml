import { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  const theme = useContext(ThemeContext);
  return <h1>{theme}</h1>;
}
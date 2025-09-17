import ThemeProvider from "./themeProvider";
import ThemeButton from "./themeButton";
function App() {
  return (
    <>
      <ThemeProvider>
        <h1>Welcome</h1>
        <ThemeButton />
      </ThemeProvider>
    </>
  )
}

export default App;

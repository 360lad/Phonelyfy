// import './App.css'
import Router from "./components/Router";
import PhonelifyContextProvider from "./context/state";
function App() {
  return (
    <PhonelifyContextProvider>
      <Router />
    </PhonelifyContextProvider>
  );
}

export default App;

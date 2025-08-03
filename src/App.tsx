import Hero from "./components/Hero";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Background />
      <Hero />
    </div>
  );
}

export default App;

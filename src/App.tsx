import Hero from "./components/Hero";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Background />
      <Hero />
    </div>
  );
}

export default App;

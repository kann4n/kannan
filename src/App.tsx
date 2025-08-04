import Hero from "./components/Hero";
import Background from "./components/Background";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden
    bg-gradient-to-br from-gray-950 to-gray-800">
      <Background />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

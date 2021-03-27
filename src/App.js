import react from "react"
import Navbar from "./components/Navbar/Navbar.js"
import Image from "./components/Image/Image"
function App() {
  // HTML
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar/>
      {/* Image */}
      <Image/>
    </div>
  );
}

export default App;

import { gsap } from "gsap";
import Navbar from "./components/Navbar";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div>
      <Navbar />
      <main>
<h1 className="text-3xl">Hello</h1>
      </main>
    </div>

  )
}

export default App

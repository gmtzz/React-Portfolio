import { createBrowserRouter,
  Route,createRoutesFromElements,
  RouterProvider }
  from "react-router-dom"
import Root from "./components/root"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Resume from "./components/resume"
function App() { 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
      <Route index element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/resume" element={<Resume/>}/>

      </Route>
    )
  )
  return(
    <div>
      <RouterProvider router={router}/>

    </div>
  )
  
}

export default App

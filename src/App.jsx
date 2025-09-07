import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PreviewPage from './components/preview/PreviewPage'
import Builder from './pages/Builder'

// const resumeData = {
//   name: "Jane Doe",
//   title: "Frontend Developer",
//   email: "jane@example.com",
//   phone: "555-1234",
//   location: "New York, NY",
//   summary: "Experienced developer with a passion for UI.",
//   experience: [
//     { role: "Developer", company: "Tech Co", years: "2020-2023", description: "Built cool stuff." }
//   ],
//   education: [
//     { degree: "B.Sc. Computer Science", institution: "NYU", years: "2016-2020" }
//   ],
//   skills: ["React", "JavaScript", "CSS"]
// };

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
        <div className='text-amber-300 text-4xl font-bold flex justify-center'>Build Your Resume</div>
        <Routes className="flex justify-center items-center">
          <Route path='/' element={<Dashboard />} />
          <Route path='/resume/new' element={<Builder />} />
          <Route path='/resume/:id' element={<Builder />} />
          <Route path='/preview/:id' element={<PreviewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

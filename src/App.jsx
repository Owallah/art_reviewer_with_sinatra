import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import SideMenu from './components/SideMenu'
import { Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import { useProSidebar } from 'react-pro-sidebar'
import TopBar from './components/TopBar'
import { ColorModeContext, useMode } from './Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Artists from './components/Artists'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import AddArt from './components/art/AddArt'
import AddComment from './components/AddComment'

function App() {
  // const [count, setCount] = useState(0)
  const [theme, colorMode] = useMode()
  const { collapseSidebar } = useProSidebar()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className='app'>
      <SideMenu />
      <main className='content'>
        <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/artists' element={<Artists/>} />
        <Route path='/contact_us' element={<Contact/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/add-art/:id' element={<AddArt />} />
        <Route path='/arts/:id' element={<AddComment />} />
      </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

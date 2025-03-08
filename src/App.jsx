import { useState } from 'react'
import Card from './assets/components/cards/Card'
import Sidebar from './assets/components/sitebar/Bar'
import Header from './assets/components/header/Head'
import Footer from './assets/components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Sidebar />
        <Card />
      </main>
      <Footer />
    </>
  )
}

export default App

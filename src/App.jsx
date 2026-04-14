import { useState } from 'react'
import Header from './Header'
import ContentSection from './Content/ContentSection';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Header />
      <ContentSection />
    </section>
  )
}

export default App

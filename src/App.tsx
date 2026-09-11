import { AISection } from './components/AISection'
import { BackToTop } from './components/BackToTop'
import { ContactSection } from './components/ContactSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
import { StackSection } from './components/StackSection'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="snap-section">
        <Header />
        <Hero />
      </div>
      <div className="snap-section">
        <StackSection />
      </div>
      <div className="snap-section">
        <ProjectsSection />
      </div>
      <div className="snap-section">
        <AISection />
      </div>
      <div className="snap-section">
        <ContactSection />
      </div>
      <BackToTop />
    </LanguageProvider>
  )
}

export default App

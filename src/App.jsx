import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
   const navLinks = ['Home', 'About', 'Services', 'Contact Us']
   const title = "MY REACT PROJECT"
    const buttonText = 'Increment'
    const footer = 'Copyright \u00A92022; Designed by TOFUNMI'
    const navbar = ['Home', 'News', 'About', 'Contact Us', 'Our Team']

  return (
    <>
    <Header links={navLinks} headerTitle={title} />
    <Content buttonText={buttonText} />
    <Footer title={footer} link={navbar}/>
    </>
  )
}

export default App

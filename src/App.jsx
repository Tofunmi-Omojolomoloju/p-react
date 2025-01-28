import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
   const navLinks = ['Home', 'About', 'Services', 'Contact Us']
   const title = "MY REACT PROJECT"
    const buttonText = 'Increment'

  return (
    <>
    <Header links={navLinks} headerTitle={title} />
    <Content buttonText={buttonText} />
    <Footer />
    </>
  )
}

export default App

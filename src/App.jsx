import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
   const navLinks = ['Home', 'About', 'Services', 'Contact Us']
   const title = "MY REACT PROJECT"
  return (
    <>
    <Header links={navLinks} headerTitle={title} />
    <Content />
    <Footer />
    </>
  )
}

export default App

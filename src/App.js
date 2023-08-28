import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./FeedbackForm";
import AboutPage from './Pages/AboutPage';
import AboutIcon from './components/shared/AboutIcon';
import { FeedbackProvider } from './components/context/FeedbackContext'

function App() {





  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes >
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
                  <AboutIcon />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>

        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

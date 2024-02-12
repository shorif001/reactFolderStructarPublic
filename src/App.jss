import React from 'react';
import Feature from './Components/Feature';
import Header from './Components/Header';
import About from './Components/About';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
<Header/>
<Feature/>
<About image={aboutimage} title="Comes withall ou need for daily life" button="Get The App"/>
<Presentation/>
<About image={aboutimage1} title="Download And Get The App" button="Get The App"/>
<Contact/>
    </div>
  );
}
// https://www.youtube.com/watch?v=HPBuLS04ojE&t=5690s&ab_channel=StepbyStep
// https://www.youtube.com/watch?v=TbGnq5CBPXY&ab_channel=Taversity
// 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

export default App;

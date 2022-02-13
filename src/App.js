import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import Inscription from './Pages/InscriptionPage';
import HomePage from './Pages/HomePage';
import DemanderCongé from './Pages/PageDemanderCongé';
import EtatDemandeCongé from './Pages/PageEtatDemandeCongé';
import PageSoldeCongé from './Pages/PageSoldeCongé';
import EspaceWelcomeEmploye from './Pages/EspaceWelcomeEmploye';
import EspaceWelcomeRH from './Pages/EspaceWelcomeRH';
import PageDemanderCongéRH from './Pages/PageDemanderCongéRH';
import PageEtatDemandeCongéRH from './Pages/PageEtatDemandeCongéRH';
import PageSoldeCongéRH from './Pages/PageSoldeCongéRH';
import PageListeInscription from './Pages/PageListeInscription';
import PageListeDemandeCongé from './Pages/PageListeDemandeCongé';
import EspaceWelcomeAdmin from './Pages/EspaceWelcomeAdmin';
import PageListeDemandeCongéAdmin from './Pages/PageListeDemandeCongéAdmin';
import PageListeInscriptionAdmin from './Pages/PageListeInscriptionAdmin';
import PageListeEmployéAdmin from './Pages/PageListeEmployéAdmin';
import PageSoldeCongéAdmin from './Pages/PageSoldeCongéAdmin';
import PageDemanderCongéAdmin from './Pages/PageDemanderCongéAdmin';
import PageEtatDemandeCongéAdmin from './Pages/PageEtatDemandeCongéAdmin';
import PageListeEmployeRH from './Pages/PageListeEmployeRH';
import ProtectedRoutesForADMIN from './ProtectedRoutes/ProtectedRoutesForADMIN';
import ProtectedRoutesForEmploye from './ProtectedRoutes/ProtectedRoutesForEmploye';
import ProtectedRoutesForRH from './ProtectedRoutes/ProtectedRoutesForRH';


function App() {
  return (
    <Router>
    <div className="App">
     <Switch>

       <Route  exact path='/' component={HomePage}/>
       
       <Route   path='/inscription'  component={Inscription}/>
          
       <Route   path='/login' component={LoginPage}/>

       
          
       <ProtectedRoutesForEmploye   path='/espaceEmploye' component={EspaceWelcomeEmploye}/>

       <ProtectedRoutesForEmploye   path='/DemanderConge' component={DemanderCongé}/>

       <ProtectedRoutesForEmploye   path='/etatdemandeconge' component={EtatDemandeCongé}/>

       <ProtectedRoutesForEmploye   path='/soldeconge' component={PageSoldeCongé}/>



       <ProtectedRoutesForRH   path='/espaceRH' component={EspaceWelcomeRH }/>

       <ProtectedRoutesForRH  path='/DemanderCongeRH' component={PageDemanderCongéRH}/>

       <ProtectedRoutesForRH   path='/etatdemandecongeRH' component={PageEtatDemandeCongéRH}/>

       <ProtectedRoutesForRH   path='/soldecongeRH' component={PageSoldeCongéRH}/>

       <ProtectedRoutesForRH   path='/ListeEmployéRH' component={PageListeEmployeRH}/>

       <ProtectedRoutesForRH   path='/listeDemandeConge' component={PageListeDemandeCongé}/>

       <ProtectedRoutesForRH   path='/listeInscription' component={PageListeInscription}/>




       <ProtectedRoutesForADMIN   path='/espaceADMIN' component={EspaceWelcomeAdmin}/>

       <ProtectedRoutesForADMIN   path='/demandercongéADMIN' component={PageDemanderCongéAdmin}/>

       <ProtectedRoutesForADMIN   path='/etatdemandecongéADMIN' component={PageEtatDemandeCongéAdmin}/>

       <ProtectedRoutesForADMIN   path='/soldeCongéADMIN' component={PageSoldeCongéAdmin}/>

       <ProtectedRoutesForADMIN   path='/listeInscriptionADMIN' component={PageListeInscriptionAdmin}/>

       <ProtectedRoutesForADMIN   path='/listeEmployeADMIN' component={PageListeEmployéAdmin}/>

       <ProtectedRoutesForADMIN   path='/listeDemandeCongeAdmin' component={PageListeDemandeCongéAdmin}/>
       
   
  
     
     </Switch>
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import Counter from './components/counter';
import Coin from './components/coin';
import store from './app/store';
import { Provider } from 'react-redux'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator }  from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {  
  return (
    <div className="App" >  
    <AmplifySignOut />    
      <h2>Hellow World!</h2>
      <Provider store = {store}> 
        <Counter />
        <Coin />  
      </Provider>
    </div>
  );
}

export default withAuthenticator(App);

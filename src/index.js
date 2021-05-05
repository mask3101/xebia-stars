import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TOKEN, CLIENT } from './Helpers/Apolo'
import { ApolloProvider  } from '@apollo/client';
import NoToken from './components/NoToken';


if(TOKEN !== undefined) {
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={CLIENT}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <NoToken />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();

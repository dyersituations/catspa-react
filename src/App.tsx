import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import Footer from "./Footer";
import "./App.css";

// const createApolloClient = (authToken) => {
//   return new ApolloClient({
//     link: new HttpLink({
//       uri: 'https://hasura.io/learn/graphql',
//       headers: {
//         Authorization: `Bearer ${authToken}`
//       }
//     }),
//     cache: new InMemoryCache(),
//   });
// };

// const App = ({ idToken }) => {
//   const client = createApolloClient(idToken);
//   return (
//     <ApolloProvider client={client}>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     </ApolloProvider>
//   );
// };

const App = () => {
  return (
    <>
      <Footer />
    </>
  );
};

export default App;

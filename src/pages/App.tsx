import React, { createContext, useState } from 'react';
import useWeb3Modal from '../hooks/useWeb3Modal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { providers } from 'ethers';
import Main from './Main';
// import { usePoller } from 'eth-hooks';

interface LandingLayoutProps {
  children: JSX.Element;
}

export const ProviderContext = createContext<providers.Web3Provider | undefined>(undefined);

export const NetworkContext = createContext<providers.Network | undefined>(undefined);

const LandingLayout = ({
  children
}: LandingLayoutProps) => {
  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();
  const [network, setNetwork] = useState<undefined | providers.Network>();

  // usePoller(async () => {
  //   if (provider && typeof provider.getNetwork === "function") {
  //     try {
  //       const newNetwork = await provider.getNetwork();
  //       setNetwork(newNetwork);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }, 1377);

  return (
    <ProviderContext.Provider value={provider}>
      <NetworkContext.Provider value={network}>
        <Flex
          direction="column"
          align="center"
          m="0 auto"
        >
          <Header provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
          {children}
          <Footer />
        </Flex>
      </NetworkContext.Provider>
    </ProviderContext.Provider>
  );
}


function App() {

  return (
    <div>
      <Router>
        <LandingLayout>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </LandingLayout>
      </Router>
    </div>
  );
}

export default App;

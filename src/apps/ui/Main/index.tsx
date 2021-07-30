import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useRouteMatch } from "react-router-dom";

import Header from "../Header";
import Router, { URI } from "../Router";
import Footer from "../Footer";
import { useStoreUser } from "../../store/hook";
import Login from "../../pages/Login";

const Main = () => {  
  const { hasLogin } = useStoreUser();

  const routingToLogin = useRouteMatch(URI.Login)
  const routingToSignUp = useRouteMatch(URI.SignUp)

  if(!hasLogin){
    if(routingToLogin) return <Login />;
    if(routingToSignUp) return <Login isSignUp />;
  }

  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Router />
      <Box flexGrow={1} />
      <Footer />
    </Flex>
  );
};

export default Main;

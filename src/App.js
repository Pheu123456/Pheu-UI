import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./page/login";
import BooksManagement from "./page/booksManagement";
import HomePage from "./page/homepage";
import { useEffect, useState } from "react";
import { useAppSelector } from "./container/store";
import { useDispatch } from "react-redux";
import { setAuthData } from "./container/Auth/actions";
import Cookies from "js-cookie"
import Checkout from "./page/checkout/checkout";
import SignUp from "./page/signUp";
import Productkeqing from './page/productkeqing';
import Productcustom from './page/productcustom';
import Productfuhua from './page/productfuhua';
import Productganyu from './page/productganyu'; 
import Productgengar from './page/productgengar';
import Producthutao from './page/producthutao';
import Productkafka from './page/productkafka';
import Productklee from './page/productklee';
import Productshenhe from './page/productshenhe';
import Productyaemiko from './page/productyaemiko';
import Product from './page/product/product';



function App() {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get("token");
    const username = Cookies.get("username");
    if (token && username) {
      dispatch(setAuthData({ username, token }))
    }
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
             <Route path="/sign-in" component={Login} />
             <Route path= '/Checkout' component={Checkout} /> 
             <Route path="/sign-up" component={SignUp} />
             <Route path='/productcustom' element={Productcustom} />
             <Route path='/productfuhua' componentt={Productfuhua} />
             <Route path='/productganyu' component={Productganyu} />
             <Route path='/productgengar' component={Productgengar} />
             <Route path='/producthutao' component={Producthutao} />
             <Route path='/productkafka' component={Productkafka} />
             <Route path='/productklee' component={Productklee} />
             <Route path='/productshenhe' element={Productshenhe} />
             <Route path='/productyaemiko' component={Productyaemiko} />
             <Route path='/productkeqing' component={Productkeqing} />
             <Route path='/product' component={Product}/>
             <Route path="/" component={HomePage} exact />
            <PrivateRoute path="/books-management"component={BooksManagement}isAuthenticated={isAuth}/>
            
        </Switch>
      </Layout>
    </BrowserRouter> 
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;

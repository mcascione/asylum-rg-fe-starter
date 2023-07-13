import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import Auth0ProviderWrapper from './components/Authorization/Auth0ProviderWrapper';
import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';
// import { TablePage } from './components/pages/Table';
import { ProfilePage } from './components/pages/profile-page';
import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Auth0ProviderWrapper>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0ProviderWrapper>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}

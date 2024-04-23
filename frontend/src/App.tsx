import {
  configureStore,
  getHistory
} from 'src/modules/store';
import React from 'react';
import { Provider } from 'react-redux';
import RoutesComponent from 'src/view/shared/routes/RoutesComponent';
import { ConfigProvider } from 'antd';
import { getAntdLanguage } from 'src/i18n';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

const store = configureStore();

const App = (props) => {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#f39c12',
        borderRadius: 0,
        colorLink: '#f39c12',

      },
      components: {
        Button: {
          colorPrimary: '#f39c12',
          algorithm: true, // Enable algorithm
          controlOutline: 'rgba(5, 145, 255, 0)'
        },
      }
    }} locale={getAntdLanguage()}>
      <Provider store={store}>
      <HistoryRouter
              //@ts-ignore
      history={getHistory()}>
           <RoutesComponent />
      </HistoryRouter>
      </Provider>
    </ConfigProvider>
  );
};

export default App;

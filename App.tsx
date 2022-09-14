import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Home} from './app/modules';
import {store, persistor} from './app/redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

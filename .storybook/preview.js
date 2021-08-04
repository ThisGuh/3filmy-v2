import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Theme from 'components/Theme';
import rootReducer from 'state/reducers';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

const store = createStore(rootReducer)

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Theme>
        <Story/>
      </Theme>
    </Provider>
  )
];
import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import astetrio from './astetrio';
import { AstetrioStateInterface } from './astetrio/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  astetrio: AstetrioStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  //example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      astetrio,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });

  return Store;
});

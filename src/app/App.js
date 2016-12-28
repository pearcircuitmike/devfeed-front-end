import React from 'react';
import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button';
import SwitchRole from './SwitchRole.js';
import AccessCode from './AccessCode.js'; // Bundled component import

const App = () => (
  <div>
    <section style={{ padding: 5}}>
      <SwitchRole />
    </section>
    <section>
      <AccessCode />
    </section>
  </div>
);

export default App;

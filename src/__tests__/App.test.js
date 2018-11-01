import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('<App /> Render without problems.', () => {
  renderer.create(<App />);
});

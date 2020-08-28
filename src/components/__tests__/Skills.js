import React from 'react';
import renderer from 'react-test-renderer';
import Skills from '../Skills';

describe('Skills', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Skills />);
    tree.unmount();
  });
});

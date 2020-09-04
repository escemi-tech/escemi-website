import React from 'react';
import renderer from 'react-test-renderer';
import Services from '../Services';

describe('Services', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Services />);
    tree.unmount();
  });
});

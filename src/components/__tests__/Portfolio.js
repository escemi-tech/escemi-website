import React from 'react';
import renderer from 'react-test-renderer';
import Portfolio from '../Portfolio';

describe('Portfolio', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Portfolio />);
    tree.unmount();
  });
});

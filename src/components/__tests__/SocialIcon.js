import React from 'react';
import renderer from 'react-test-renderer';
const { faGithub } = require('@fortawesome/free-brands-svg-icons');
import SocialIcon from '../SocialIcon';

describe('SocialIcon', () => {
  it('renders correctly with font awesome icon', () => {
    const tree = renderer.create(<SocialIcon icon={faGithub} />);
    tree.unmount();
  });

  it('renders correctly with string icon', () => {
    const tree = renderer.create(<SocialIcon icon="icon-social-malt" />);
    tree.unmount();
  });
});

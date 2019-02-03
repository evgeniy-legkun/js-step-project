import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIgloo,
  faArrowLeft,
  faMale,
  faFemale
} from '@fortawesome/free-solid-svg-icons';

library.add({
  faIgloo,
  faArrowLeft,
  faMale,
  faFemale
});

const IconSvg = (props) => {
  const { icon = 'igloo' } = props;
  return (<FontAwesomeIcon icon={icon} />);
};

export default IconSvg;
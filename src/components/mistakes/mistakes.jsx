import React from 'react';
import {MISTAKES_TYPE} from '../../types/types';

const Mistakes = (props) => {
  const {count} = props;

  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />)}
    </div>
  );
};

Mistakes.propTypes = MISTAKES_TYPE;

export default Mistakes;

import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

// The lines 8 and 16 are equal

class Field extends React.Component {
  // static contextType = LanguageContext;
  
  render() {
    return (
      <div className='ui field'>
        <label>{this.context === 'EN' ? 'Name' : 'Nombre'}</label>
        <input />
      </div>
    )
  }
};

Field.contextType = LanguageContext;

export default Field;
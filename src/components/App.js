import React from 'react';
import UserCreate from './UserCreate';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      language: 'EN'
    }
  }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={() => this.onLanguageChange('EN')}></i>
          <i className='flag ar' onClick={() => this.onLanguageChange('ES')}></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={'blue'}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;
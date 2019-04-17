import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/*
        CONTEXTTYPE VS CONSUMER
        =======================

        ContextType is used when you have to take info from a single context.
        Consumer is used tu pull data from multiple context sources.

*/
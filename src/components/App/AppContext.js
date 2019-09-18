import React from 'react';

const ContourContext = React.createContext({
    shows: [],
    tours: [],
    todaysDate: '',
    addShowSubmit: () => {},
    addTourSubmit: () => {}
});

export default ContourContext;
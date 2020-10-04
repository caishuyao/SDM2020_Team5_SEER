import React,{ useState } from 'react';

export default (initialValue) => {
  const [Lines, setLines] = useState(initialValue);

  return {
    Lines,
    addDropdown : () => {
        var i = Lines.length+1;
        setLines([...Lines,{key:i}]); 
    },
    removeDropdown :(nn) => {
        const newLines = Lines.filter((_,index) => index != nn);
        setLines(newLines);
    }
    }
};
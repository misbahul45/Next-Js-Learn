'use client'
import React from 'react'

export const MyContext = React.createContext({
    showForm:false,
    toggleForm:()=>{}
});

const LayoutProvider = ({ children }:{ children: React.ReactNode}) => {
    const [showForm, setShowForm] = React.useState(false);

    const toggleForm = () => {
        setShowForm(prev => !prev);
    }
  
    return (
      <MyContext.Provider value={{ showForm, toggleForm }}>
        {children}
      </MyContext.Provider>
    );
}

export default LayoutProvider

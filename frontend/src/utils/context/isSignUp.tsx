import React, { createContext, useState, useContext } from 'react';

interface SignUpContextProps {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpContext = createContext<SignUpContextProps | undefined>(undefined);

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error('useSignUpContext must be used within a SignUpProvider');
  }
  return context;
};

export const SignUpProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SignUpContext.Provider value={{ isSignUp, setIsSignUp }}>
      {children}
    </SignUpContext.Provider>
  );
};

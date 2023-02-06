import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react';

type Context = {
  setOpenDetails: React.Dispatch<SetStateAction<boolean>>;
  detailsIsOpen: boolean;
};

const DetailsContext = createContext({
  detailsIsOpen: false
} as Context);

export const DetailsContextProvider = ({ children }: PropsWithChildren) => {
  const [detailsIsOpen, setOpenDetails] = useState(false);

  return (
    <DetailsContext.Provider value={{ detailsIsOpen, setOpenDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetailsContext = () => useContext(DetailsContext);

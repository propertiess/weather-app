import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useState
} from 'react';

interface IDetailsContext {
  setOpenDetails: React.Dispatch<SetStateAction<boolean>>;
  details: boolean;
}

export const DetailsContext = createContext({
  details: false
} as IDetailsContext);

export const DetailsContextProvider = ({ children }: PropsWithChildren) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <DetailsContext.Provider value={{ details: openDetails, setOpenDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

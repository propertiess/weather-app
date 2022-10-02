import React, { createContext, SetStateAction, useState } from "react";

interface IDetailsContext {
  setOpenDetails: React.Dispatch<SetStateAction<boolean>>;
  details: boolean;
}

export const DetailsContext = createContext<IDetailsContext>({
  details: false,
  setOpenDetails: () => {},
});

export const DetailsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <DetailsContext.Provider value={{ details: openDetails, setOpenDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContext;

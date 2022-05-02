import * as React from "react";

type ValueContextType = {
  value: number | undefined;
  setValue: (value: number | undefined) => void;
};

type ValueProviderProps = {
  children?: React.ReactNode;
};

export const ValueContext = React.createContext<ValueContextType>({
  value: undefined,
  setValue: () => {},
});

export const ValueProvider = ({
  children,
}: ValueProviderProps): JSX.Element => {
  const [value, setValue] = React.useState<number | undefined>();

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};

import { FC } from "react";

interface DarkLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};

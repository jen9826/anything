import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }){
  return <div className="pt-5 px-2">{children}</div>
}
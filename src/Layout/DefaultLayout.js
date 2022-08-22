import React from "react";

import { Footer } from "./Footer";

import MiddleNav from "../component/navbar-comp/MiddleNav";
import TopNav from "../component/navbar-comp/TopNav";
import BottomNav from "../component/navbar-comp/BottomNav";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <hr />
      <main className="main">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
};

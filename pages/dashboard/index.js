import Head from "next/head";
import React from "react";
import Dashbar from "../../components/Dashboard/Dashbar";
import Dashboard from "../../components/Dashboard/Dashboard";

const dashboard = () => {
  return (
    <div className="pt-14">
      <Head>
        <title>E-Pustok-Dashboard</title>
      </Head>
      <main>
        <Dashbar></Dashbar>
        <Dashboard></Dashboard>
      </main>
    </div>
  );
};

export default dashboard;

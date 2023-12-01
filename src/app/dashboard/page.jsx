"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </div>
  );
};

export default Dashboard;

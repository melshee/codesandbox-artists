/*
Thank you for committing your valuable time to our take-home exercise!

We hope you won't spend more than two hours.

At Crux, we're using Supabase to power our backend.  I've put together
some code to fetch data from Supabase.  I've also added a table to our
UI – currently with no data in it.

Your mission is to:
  *1. Display the data we're fetching in the table
  2. Create a form to insert new artists into our Supabase backend
  3. Define a type for the objects in the `data` array returned by the
     select from Supabase, i.e. replace the `any` in

     const { data }: { data: any[] } = await supabase
       .from(TABLE_NAME)
       .select("*");

     If there are other places you could add that type annotation,
     please do so!

The form should have fields for name and year formed and a submit button.

Don't worry about:
  - Displaying the new artist in the table after submitting, i.e. it's
    okay if we need to refresh to see the new artist displayed in the
    table
  - styling, although feel free to switch UI libraries if you'd like
*/

import "./styles.css";
import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Table } from "antd"; // https://ant.design/components/table

const TABLE_NAME = "artists_melissa";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Year formed",
    dataIndex: "year_formed",
    key: "yearFormed"
  }
];

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: any[] } = await supabase
        .from(TABLE_NAME)
        .select("*");

      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);
  // called twice on initial load TODO: figure out why and reduce?
  // look into: https://legacy.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  return (
    <div className="App">
      <h1>Laid back vibes.</h1>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
      />
    </div>
  );
}

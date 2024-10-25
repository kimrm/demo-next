import React from "react";

async function fetchData() {
  "use server";
  const data = [
    {
      name: "John Doe",
      age: 29
    },
    {
      name: "Jane Doe",
      age: 32
    },
    {
      name: "John Smith",
      age: 41
    },
    {
      name: "Jane Smith",
      age: 36
    }
  ];

  return data;
}

export default async function Test() {
  const data = await fetchData();
  return (
    <div>
      <h1>Data</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
          </div>
        );
      })}
    </div>
  );
}

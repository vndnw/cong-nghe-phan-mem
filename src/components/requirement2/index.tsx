import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";

const Requirement1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://internship-api.dev.altasoftware.vn/api/subject")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên môn học",
      dataIndex: "tenmonhoc",
      key: "tenmonhoc",
    },
    {
      title: "Abbreation",
      dataIndex: "abbreation",
      key: "abbreation",
    },
    {
      title: "Hành động",
      dataIndex: "taxCode",
      key: "taxCode",
      render: (text, record) => <Button>Delete</Button>,
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={columns} />;
    </>
  );
};

export default Requirement1;

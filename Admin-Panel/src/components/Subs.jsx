import React from "react";
import { useState, useEffect } from "react";
import ReactToExcel from "react-html-table-to-excel";

const Subs = () => {
  const [data, setData] = useState([]);
  const [allSubs, setAllSubs] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3002/subs");
      const result = await response.json();
      setData([...result]);
    };
    fetchData();
  }, [allSubs]);

  return (
    <div className="subs" id="subscribers">
      <h2 className="title">SUBSCRIBERS</h2>
      <div className="line s"></div>
      <div className="txt">
        <button type="button" onClick={() => setAllSubs(false)} className="add">
          Show more
        </button>
        <button
          type="button"
          onClick={() => setAllSubs(true)}
          className="delete"
        >
          Show less
        </button>
      </div>
      <table id="table-to-xls">
        {allSubs
          ? data.slice(data.length - 3).map((eachData, index) => (
              <ul key={index}>
                <table id="table-to-xls">
                  <li className="sub" key={index}>
                    {eachData.email}{" "}
                  </li>
                </table>
              </ul>
            ))
          : data.map((eachData, index) => (
              <ul key={index}>
                <li className="sub">{eachData.email}</li>
              </ul>
            ))}
      </table>

      <ReactToExcel
        className="btnn"
        table="table-to-xls"
        filename="excelFile"
        sheet="sheet 1"
        buttonText="Export"
      />
    </div>
  );
};

export default Subs;

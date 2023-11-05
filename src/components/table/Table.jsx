import {useEffect,useRef} from "react";
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { mockData } from "../../data/mockdata";

 
const Table = () => {
  const tableRef=useRef(null);
  useEffect(()=>{
    const table=new DataTable(tableRef.current, {
      data: mockData,
      columns: [
        { title: "Name" },
        { title: "Occupation" },
        { title: "City" },
        { title: "ZIP" },
        { title: "Birthday" },
        { title: "Salary" },
      ],
    });
    return()=>{
      table.destroy();
    }
  },[])


  return (
    <table id="datatablesSimple" className="display w-100" ref={tableRef}>
    </table>
  );
};

export default Table;

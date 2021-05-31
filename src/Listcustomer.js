import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GetCustomer } from "./Api";
import { useContext, useEffect, useState } from "react";
function Listcustomer(){
    let[user, setdata]=useState([]);
    
    useEffect(async ()=>{
      let x= await GetCustomer();
      setdata(...user,x.data)
      console.log(user);
    },[]);
    return(
        <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-grey-800">Listcustomer</h1>
  
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Hallname</th>
                    <th>Amenities</th>
                    <th>Persons</th>
                    <th>Price</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>Name</th>
                    <th>Hallname</th>
                    <th>Amenities</th>
                    <th>Persons</th>
                    <th>Price</th>
                    <th>Edit</th>
                  </tr>
                </tfoot>
                <tbody>
                  {user.map((e, i) => {
                    console.log(e)
                    return (
                      <tr>
                        <td>
                          {e.name}
                        </td>
                        <td>{e.hallname}</td>
                        <td>{e.amenities}</td>
                        <td>{e.maxperson}</td>
                        <td>{e.hallprice}</td>
                        <td>
                        <td>
                          <Link
                            to={`/Editcus/${e.id}`}
                            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                          >
                            <i class="fas  fa-sm text-white-50"></i>edit
                          </Link>
                        </td>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Listcustomer;
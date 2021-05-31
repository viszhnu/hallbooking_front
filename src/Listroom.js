import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetUserData } from "./Api";
function Listroom(){
    let[user, setdata]=useState([]);
    
    useEffect(async ()=>{
      let x= await GetUserData();
      setdata(...user,x.data)
      console.log(user);
    },[]);
    return(
        <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-grey-800">Listroom</h1>
  
          <Link
            to="/Createroom"
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i class="fas  fa-sm text-white-50"></i> Create Hall
          </Link>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">HALLS PRESENT</h6>
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
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Amenities</th>
                    <th>Max persons</th>
                    <th>Price</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Amenities</th>
                    <th>Max persons</th>
                    <th>Price</th>
                    <th>Edit</th>
                  </tr>
                </tfoot>
                <tbody>
                  {user.map((e, i) => {
                    console.log("z")
                    return (
                      <tr>
                        <td>{i+1}</td>
                        <td>{e.name}</td>
                        <td>{e.amenities}</td>
                        <td>{e.persons}</td>
                        <td>{e.hallprice}</td>
                        <td>
                          <Link
                            to={`/Edit/${e.id}`}
                            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                          >
                            <i class="fas  fa-sm text-white-50"></i>edit
                          </Link>
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
export default Listroom;
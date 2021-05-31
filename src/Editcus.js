import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetCus, PutCus } from "./Api";

function Editcus(props){
	var check=true;
	let[user, setdata]=useState([]);
	let[username, setusername]=useState("");
    let[useramenities, setuseramenities]=useState("");
	let[hname, sethname]=useState("");
    let[price, setprice]=useState("");
	let[person, setperson]=useState(0);
    let usedata={
        name:username, amenities:useramenities,hallname:hname, hallprice: price, maxperson:person
    }
    useEffect(async ()=>{
      let x= await GetCus(props.match.params.id);
      console.log(x.data);
      setdata(...user,x.data)
	  sethname(x.data.hallname)
	  setuseramenities(x.data.amenities);
	  setprice(x.data.hallprice);
	  setperson(x.data.maxperson);
      setusername(x.data.name);
    },[]);
    return(
     <>
      <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-7 col-md-push-5">
						<div class="booking-cta">
							<h1>Edit your reservation</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
								ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
								Perspiciatis.
							</p>
						</div>
					</div>
					<div class="col-md-4 col-md-pull-7">
						<div class="booking-form">
							<form onSubmit ={async (e)=>{
                                e.preventDefault();
                                console.log(usedata)
                                await PutCus(props.match.params.id, usedata)
								}}>
								<div class="form-group">
									<span class="form-label">Select Room</span>
											<select class="form-control">
												
										 <option disabled>{hname+"("+person+")"}</option>
											
											</select>
											<span class="select-arrow"></span>
								</div>
								<div class="row">
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Check In</span>
											<input class="form-control" type="date" required/>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Check out</span>
											<input class="form-control" type="date" required/>
										</div>
									</div>
								</div>
								<div class="row">
								<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Name</span>
											<input class="form-control" type="text" value={username}
											required onChange={
												(e)=>{
													setusername(e.target.value);
												}
											}/>
										</div>
									</div>
                                    <div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">price</span>
											<input class="form-control" type="text" value={price} disabled/>
										</div>
									</div>
								</div>
								<div class="form-btn">
									<button class="submit-btn">book</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
     </>
    );
}
export default Editcus;
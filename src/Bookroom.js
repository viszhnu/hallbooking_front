import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetUserData, PostCustomer } from "./Api";

function Bookroom(props){
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
      let x= await GetUserData();
      setdata(...user,x.data)
	  sethname(x.data[0].name)
	  setuseramenities(x.data[0].amenities);
	  setprice(x.data[0].hallprice);
	  setperson(x.data[0].persons);
    },[]);
    return(
     <>
      <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-7 col-md-push-5">
						<div class="booking-cta">
							<h1>Make your reservation</h1>
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
							    await PostCustomer(usedata);
								setusername("");
								}}>
								<div class="form-group">
									<span class="form-label">Select Room</span>
											<select class="form-control" onChange={ (e)=>{
                                            console.log(e.target.value);
											sethname(user[e.target.value].name);
											setprice(user[e.target.value].hallprice);
											setuseramenities(user[e.target.value].amenities);
											setperson(user[e.target.value].persons);
			                                console.log(price);
                                        }
                                    }>
											{
												user.map((i,j)=>{
													//console.log(i);
													return 	<option value={j}>{i.name+"("+i.persons+")"}</option>
												})
											}
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
export default Bookroom;
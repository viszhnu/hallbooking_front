import React, {useState, useContext, Profiler, useEffect} from "react";
import Api, { PostUserData } from "./Api";
function Createroom(){
    let[username, setusername]=useState("");
    let[useramenities, setuseramenities]=useState("");
	let[maxpersons, setmaxpersons]=useState(0);
    let[price, setprice]=useState(0);
    let usedata={
        name:username, amenities:useramenities, persons:maxpersons, hallprice: price
    }
    return(
       <>
      <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-7 col-md-push-5">
						<div class="booking-cta">
							<h1>Create Hall</h1>
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
							    await PostUserData(usedata);
                                setusername("");
                                setuseramenities("");
                                setprice(0);
								setmaxpersons(0);
								}}>
								<div class="form-group">
									<span class="form-label">Enter Hall Name</span>
									<input class="form-control" type="text" size="3" 
									value={username} required id="rname" onChange={
                                        (e)=>{
                                            setusername(e.target.value);
                                        }
                                    }/>
								</div>
								<div class="row">
                                    <div class="col-sm-12">
										<div class="form-group">
											<span class="form-label">Enter Amenities</span>
											<input class="form-control" type="text"
											 value={useramenities} required onChange={
                                        (e)=>{
                                            setuseramenities(e.target.value);
                                        }
                                    }/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-4">
										<div class="form-group">
											<span class="form-label">MaxPersons</span>
                                            <input class="form-control" type="number"
											value={maxpersons} required onChange={
                                        (e)=>{
                                            setmaxpersons(e.target.value);
                                        }
                                    }/>
										</div>
									</div>
                                    <div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">price</span>
											<input class="form-control" type="number"
											value={price} required onChange={
                                        (e)=>{
                                            setprice(e.target.value);
                                        }
                                    }/>
										</div>
									</div>
								</div>
								<div class="form-btn">
									<button class="submit-btn">create</button>
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
export default Createroom;
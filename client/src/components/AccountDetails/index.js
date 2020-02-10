import "../style.css";
import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import API from '../../utils/API';
import DeleteBtn from '../DeleteBtn';

function AccountDetails(props) {
    // const { loading, user } = useAuth0();
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        console.log("useEffect() is running");
        API.getAllTrips(props.user).then((res) => {
            console.log(props.user)
            console.log(res)
            console.log(trips)
            setTrips(res)
        })
    }, [trips])

    // if (loading || !this.props.user) {
    //     return <div>Loading...</div>;
    // }


    // console.log(this.props.user);
    return (
        <div>
            <div className="container account-Details">
                <div className="row">
                    <div className="col-md-6">
                        <Fragment>
                            <h1>Your Account</h1>

                            <h5>Username:</h5>
                            <p>{props.user.nickname}</p>
                            <h5>Email:</h5>
                            <p>{props.user.email}</p>

                        </Fragment>
                    </div>

                    <div className="col-md-6">
                        <img src={require("../images/profilepicture.png")} alt="profile" id="profilepic" />

                    </div>
                </div>

                <div class="saved-Trips">
                    <h2>Your Saved Trips</h2>


                    {console.log("trips.data: ", trips.data)}

                    <div className="col-md-12 savedTrip">

                        {trips.data
                            ? trips.data.map(trip => (
                                <div key={trip._id}>
                                    <h5>Trip Start Location: {trip.start}</h5>
                                    <h5>Trip End Location: {trip.end}</h5>
                                    <DeleteBtn 
                                    _id={trip._id} 
                                    handleDelete={props.handleDelete}
                                    />
                                </div>
                            ))
                            : null}

                    </div>

                </div>
                {/* <h5 className="savedTripTitle">Saved Trip One</h5>
            <div className="col-md-12 savedTrip">
                <img src="images/savedtripone.png"></img>
            </div> */}
            </div>
        </div >
    );
}

export default AccountDetails;

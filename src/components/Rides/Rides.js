import React from 'react';
import Bike from '../../images/bike.svg';
import Car from '../../images/car.svg';
import Bus from '../../images/bus.svg';
import Train from '../../images/train.svg';
import { Link, useParams } from 'react-router-dom';
import './Rides.css';

const Rides = () => {
    const {rideType} = useParams()
    const card = (img, name, rideType) => {
        return (
            <Link className="nav-link" to={`/rides/${rideType}`}>
                <div className="row m-1">
                    <div className="col-lg-8 col-sm-12"></div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card-background p-2 rounded shadow row" style={{ width: '18rem' }}>
                            <div className="col-lg-7">
                                <img src={img} className="mt-2 w-75" alt="" />
                            </div >
                            <div className="col-lg-5 card-body ">
                                <h5 className="card-title fs-1 text-info mt-1">{name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    return (
        <div className="mt-5 pt-5">
            {card(Bike, "Bike", "bike")}
            {card(Car, "Car", "car")}
            {card(Bus, "Bus", "bus")}
            {card(Train, "Train", "train")}
        </div>
    );
};

export default Rides;
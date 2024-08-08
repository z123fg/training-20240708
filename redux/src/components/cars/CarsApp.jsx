import React, { useState } from "react";
import Car from "./Car";
import store from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

export default function CarsApp() {
  // const cars = store.getState();
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  console.log(store.getState());

  const sellCarHandler = (id) => {
    dispatch({ type: "SELL", payload: id });
    // console.log(store.getState());
  };

  return (
    <div>
      {cars.map((car) => (
        <Car car={car} sellCarHandler={sellCarHandler} key={car.id} />
      ))}
    </div>
  );
}

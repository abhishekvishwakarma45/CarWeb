import axios from "axios";
import React, { useMemo, useReducer } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { CarReducer as Reducer } from "../reducer/CarReducer";

const carInitialState = {
  isLoading: false,
  carInventory: [],
  singleCar: {},
};

const carContext = createContext();

const CarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, carInitialState);

  useEffect(() => {
    const FetchCarData = async () => {
      dispatch("SET_LOADING");
      let Response = await axios.get("/car_inventory.json");
      let carData = await Response.data;
      dispatch("STOP_LOADING");
      dispatch({ type: "SET_CAR_INVENTORY_DATA", payload: carData });
    };
    FetchCarData();
  }, []);

  const getUniqueValues = (key) => {
    const values = state.carInventory.map((car) => car[key]);
    return [...new Set(values)];
  };

  function getCarByID(id) {
    dispatch({ type: "SET_LOADING" });
    let car = state.carInventory.find((curr) => {
      return String(curr.id) === id;
    });
    console.log("founded car" + car);
    dispatch({ type: "STOP_LOADING" });
    dispatch({ type: "SET_SINGLE_CAR", payload: car });
  }

  return (
    <carContext.Provider
      value={{ state, useCarContext, getUniqueValues, getCarByID }}
    >
      {children}
    </carContext.Provider>
  );
};

export const useCarContext = () => {
  return useContext(carContext);
};

export default CarContextProvider;

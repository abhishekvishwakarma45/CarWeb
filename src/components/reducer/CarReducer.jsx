import React from "react";

export const CarReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "STOP_LOADING": {
      return {
        ...state,
        isLoading: false,
      };
    }

    case "SET_CAR_INVENTORY_DATA": {
      return {
        ...state,
        carInventory: action.payload,
      };
    }
    case "SET_SINGLE_CAR": {
      return {
        ...state,
        singleCar: action.payload,
      };
    }

    case "UPDATE_SIDEBAR_VALUE": {
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

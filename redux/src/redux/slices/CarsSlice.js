const carsInitialValue = [
  {
    id: 1,
    name: "toyota",
    quantity: 10,
  },
  {
    id: 2,
    name: "nissan",
    quantity: 10,
  },
  {
    id: 3,
    name: "ford",
    quantity: 10,
  },
];

const carsReducer = (state = carsInitialValue, { type, payload }) => {
  switch (type) {
    case "SELL":
      return state.map((car) => {
        if (car.id === payload) {
          return {
            ...car,
            quantity: car.quantity - 1,
          };
        } else {
          return car;
        }
      });
    default:
      return state;
  }
};

export { carsReducer };

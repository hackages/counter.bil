export const INC = "INC";
export const DEC = "DEC";

export const stepAction = {
  type: "STEP",
  payload: {
    step: 5,
  },
};

export const incrementAction = {
  type: INC, // what if the type wasn't defined here?
};

export const decrementAction = {
  type: DEC, // what if the type wasn't defined here?
};

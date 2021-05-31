export const sendFeed = (data) => {
  return {
    type: "SEND_FEEDBACK",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

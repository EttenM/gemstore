export const createPayment = async () => {
  let redirectUrl = process.env.PAYMENT_CALLBACK_URL;
  // setTimeout(() => {
  //   redirectUrl = process.env.PAYMENT_CALLBACK_URL;
  // }, 2000);

  return redirectUrl;
};

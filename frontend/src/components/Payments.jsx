import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51PQgbMA18qpf9E1FO03LmYGEkm5CIPe85bM2ZgzGYVdRAxF5f91LtH0boMUfZodYL6zAnfzrsVoMtveP44jgFD7L00X0tv3iAP";

const Payments = () => {
  const navigate = useNavigate(); // Define useNavigate instead of useHistory

  const handleButtonClick = () => {
    navigate('/success');
  };

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]); // Update dependencies array

  return (
    <div className="flex items-center justify-center h-screen">
      {stripeToken ? (
        <span>Processing, Please wait...</span>
      ) : (
        <StripeCheckout
          name="We Shop" 
          image= "../../public/payments.jpg"
          billingAddress
          shippingAddress
          description="Your total is 20$"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button onClick={handleButtonClick} className="btn btn-outline btn-accent">Pay Now!</button>
        </StripeCheckout>
      )}
    </div>
  );
}

export default Payments;

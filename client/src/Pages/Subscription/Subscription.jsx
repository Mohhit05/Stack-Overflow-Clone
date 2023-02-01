import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import axios from "axios";

const Subscription = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("https://stack-overflow-8iqc.onrender.com/api/getkey");

    const {
      data: { order },
    } = await axios.post("https://stack-overflow-8iqc.onrender.com/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Silver Pack",
      description: "payment by RazorPay",
      order_id: order.id,
      callback_url: "https://stack-overflow-8iqc.onrender.com/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={1000}
          
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Subscription;

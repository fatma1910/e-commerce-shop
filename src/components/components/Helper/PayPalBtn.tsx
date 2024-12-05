// @ts-nocheck

import React from 'react'

import { FUNDING ,PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PaypalBtnProps {
    amount: string;
    onSuccess: (details:any) => void;
}

const PayPalBtn = ({amount , onSuccess}:PaypalBtnProps) => {
    console.log("Creating order with amount:", amount);

  return (
    
    <PayPalScriptProvider options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "EUR",
    }}>
        <PayPalButtons fundingSource={FUNDING.PAYPAL} createOrder={(data,action) => {
            return action.order.create({
                purchase_units: [
                    {
                        
                        amount: {
                            value: amount,
                            
                        }
                    }
                ]
            })
        }}
        onApprove={(data, actions) => {
            return actions.order.capture().then(details => {
                onSuccess(details);
            })
        }}
        
        />
    </PayPalScriptProvider>
  )
}

export default PayPalBtn
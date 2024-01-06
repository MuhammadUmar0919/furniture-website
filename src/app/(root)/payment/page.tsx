import React from "react"
import { Button, Typography } from "@/common"

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
  const renderPaymentButton = (imageSrc: string) => (
    <Button
      placeholder
      size="lg"
      color="white"
      className="w-full flex items-center gap-3"
    >
      <img src={imageSrc} alt="payment" className="w-full h-9" />
    </Button>
  )

  const renderInput = (label: string, type: string, placeholder: string) => (
    <div>
      <label htmlFor="" className="mb-2">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="w-full bg-[white] border-[1px] border-solid border-rgba(0, 0, 0, 0.25) rounded-[10px] px-[12px] py-[10px] outline-none"
      />
    </div>
  )

  return (
    <div className="container grid gap-[80px] md:gap-[60px]">
      <Typography
        placeholder
        variant="h2"
        data-aos="fade-up"
        className="subtitle"
      >
        Payment
      </Typography>
      <div data-aos="zoom-out" className="w-2/4 md:w-full grid gap-9 md:gap-6">
        <div className="flex gap-[60px] md:gap-[40px]">
          {renderPaymentButton("/images/visa.png")}
          {renderPaymentButton("/images/payment.png")}
          {renderPaymentButton("/images/paypal.png")}
        </div>
        <form action="" className="contents">
          {renderInput("Card name", "text", "Umms Moh")}
          {renderInput("Card number", "number", "**** **** **** 2761")}
          <div className="flex gap-[20px]">
            {renderInput("Expiration date", "text", "MM/DD/YYYY")}
            {renderInput("CVV", "number", "***")}
          </div>
          <Button placeholder className="btn !mt-[30px]">
            Pay Now
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Payment

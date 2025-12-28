import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
const Deposit = () => {
  const navigate = useNavigate()
  const initialValues = {
    amount: "",
    method: ""
  }

  const validationSchema = Yup.object({
    amount: Yup.number().required("Amount is required").typeError("Amount must be numbers"),
    method: Yup.string().required("Deposit method is required")
  })

  const handleSubmit = async(values)=>{
    try {
      console.log("form submited", values);
      navigate('/DepositConfirm')
    } catch (error) {
      console.log(error);
    }
  }
   
  return (
    <main>
      <section>
        <div
          id="depositSonDiv"
          className="flex flex-col items-center justify-center gap-5 px-4 py-10 text-gray-100 bg-teal-900 rounded "
        >
          <span className="text-[28px] md:text-[22px] lg:text-[42px] font-normal text-gray-100 tracking-wider ">
            <h1>Make a Deposit</h1>
          </span>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
          {({ isSubmitting }) =>(
          <Form className="flex flex-col items-center justify-center w-full gap-10 ">
            <div className="flex flex-row items-center justify-center w-full gap-6 ">
              <span id="amountSpan" className="flex flex-col gap-1 w-[40%]  ">
                <label htmlFor="text">Amount</label>
                <Field
                  name="amount"
                  type="text"
                  placeholder="Enter amount"
                  className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5 "
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                />
              </span>

              <span className="flex flex-col gap-1 w-[40%]  ">
                <label htmlFor="method" className="">
                  Choose payment method
                </label>
                <Field
                  as="select"
                  name="method"
                  className="bg-teal-900 outline-none rounded-md border-[1px] border-gray-100 py-1.5 pl-1 text-white"
                >
                  <option value="">Choose payment method</option>
                  <option value="usdt">USDT</option>
                  <option value="btc">Bitcoin</option>
                  <option value="eth">Ethereum</option>
                  <option value="bsc">Smart Chain</option>
                  <option value="bnb">Binance Coin</option>
                </Field>
                <ErrorMessage 
                  name="method"
                  component="div"
                  className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                 />
              </span>
            </div>

            <span className="px-1 py-1 transition-all bg-green-900 rounded hover:bg-green-800 ">
              <button
              type="submit"
              disabled={isSubmitting}
               className="text-[28px] md:text-[22px] lg:text-[20px] bg-orange-950 px-4 py-1 rounded"
               >
                {isSubmitting ? "Submit..." : "Submit"}
              </button>
            </span>
          </Form>
          )}
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default Deposit;

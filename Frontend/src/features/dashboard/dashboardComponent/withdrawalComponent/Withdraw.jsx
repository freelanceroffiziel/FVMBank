import React from "react";

const Withdraw = () => {
  return (
    <main className="withdrawCon">
      <section className="withdrawCon">
        <div
          id="depositSonDiv"
          className="flex flex-col items-center justify-center gap-5 px-4 py-10 text-gray-100 bg-teal-900 rounded "
        >
          <span className="text-[28px] md:text-[22px] lg:text-[42px] font-normal text-gray-100 tracking-wider ">
            <h1>Withdraw your Fund</h1>
          </span>

          <form className="flex flex-col items-center justify-center w-full gap-10 ">
            <div className="flex flex-row items-center justify-center w-full gap-6 ">
              <div className="flex flex-col gap-3 w-[40%] ">
                <span id="amountSpan" className="flex flex-col w-full gap-1">
                  <label htmlFor="text">Amount</label>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5 "
                  />
                </span>

                <span id="amountSpan" className="flex flex-col w-full gap-1 ">
                  <label htmlFor="text">Enter your wallet</label>
                  <input
                    type="text"
                    placeholder="Wallet"
                    className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5 "
                  />
                </span>
              </div>

              <div className="flex flex-col gap-3 lg:w-[40%]   ">
                <span className="flex flex-col w-full gap-1 ">
                  <label htmlFor="amount" className="">
                    Choose payment method
                  </label>
                  <select
                    id="amount"
                    name="fruit"
                    className="bg-teal-900 outline-none rounded-md bg-none border-[1px] border-gray-100 py-1.5 pl-1 "
                  >
                    <option value="apple">Usdt</option>
                    <option value="banana">Bitcoin</option>
                    <option value="cherry">Ethereum</option>
                    <option value="cherry">Smart Chain</option>
                    <option value="cherry">Binance Coin</option>
                  </select>
                </span>

                <span className="flex flex-col w-full gap-1 ">
                  <label htmlFor="amount" className="">
                    Withdraw from
                  </label>
                  <select
                    id="amount"
                    name="fruit"
                    className="bg-teal-900 outline-none rounded-md bg-none border-[1px] border-gray-100 py-1.5 pl-1 "
                  >
                    <option value="apple">Withdraw from</option>
                    <option value="banana">Deposit</option>
                    <option value="cherry">Ethereum</option>
                  </select>
                </span>
              </div>
            </div>

            <span className="px-1 py-1 transition-all bg-green-900 rounded hover:bg-green-800 ">
              <button className="text-[28px] md:text-[22px] lg:text-[20px] bg-teal-950 px-4 py-1 rounded">
                Submit
              </button>
            </span>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Withdraw;

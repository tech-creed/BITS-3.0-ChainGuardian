import React from 'react';
import '../public/crypto/css/tables.css'

const Table = ({ data }) => {
  return (
    <>
      <hr />
      <h1 id="transactionData">Transaction Inputs</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="s min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                        <th scope="col"  className="text-black px-6 py-4">Id</th>
                        <th scope="col" className="text-black px-6 py-4">Block Id</th>
                        <th scope="col"  className="text-black px-6 py-4">Date Time</th>
                        <th scope="col" className="  text-black px-6 py-4">USD</th>
                        <th scope="col" className=" text-black px-6 py-4">Sender Address</th>
                        <th scope="col"  className="  text-black px-6 py-4">Transferred</th>
                      </tr>
                </thead>
                <tbody>
                {data && data.inputs.map(element => (
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap text-white px-6 py-4 font-medium">{element.id}</td>
                          <td className="whitespace-nowrap text-white px-6 py-4">{element.block_id}</td>
                          <td className="whitespace-nowrap text-white px-6 py-4">{element.time}</td>
                          <td className="whitespace-nowrap text-white px-6 py-4">{element.usd}</td>
                          <td className="whitespace-nowrap text-white px-6 py-4">{element.recipient}</td>
                          <td className="whitespace-nowrap text-white px-6 py-4">{element.transfered}</td>
                        </tr>
                      ))
                      }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h1>Transaction Output</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead
                  className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                        <th scope="col" className=" text-black px-6 py-4">Id</th>
                        <th scope="col" className="text-black px-6 py-4">Block Id</th>
                        <th scope="col" className="text-black px-6 py-4">Date Time</th>
                        <th scope="col" className="text-black px-6 py-4">USD</th>
                        <th scope="col" className="text-black px-6 py-4">Sender Address</th>
                        <th scope="col" className="text-black px-6 py-4">Transferred</th>
                      </tr>
                </thead>
                <tbody>
                {data && data.outputs.map(element => (
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">{element.id}</td>
                          <td className="whitespace-nowrap  px-6 py-4">{element.block_id}</td>
                          <td className="whitespace-nowrap  px-6 py-4">{element.time}</td>
                          <td className="whitespace-nowrap  px-6 py-4">{element.usd}</td>
                          <td className="whitespace-nowrap  px-6 py-4">{element.recipient}</td>
                          <td className="whitespace-nowrap  px-6 py-4">{element.transfered}</td>
                        </tr>
                      ))
                      }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Table;
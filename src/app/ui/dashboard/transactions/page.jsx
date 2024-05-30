import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";


const Transactions = () => {
  return (
    <div className="bg-gray-800 p-3 rounded-lg">
      <h2 className="mb-5 font-light text-soft">Latest Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="font-black">
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                
                Aditya Deshmukh
              </div>
            </td>
            <td>
              <span className="rounded-md px-2.5 py-1 text-sm text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                
              Aditya Deshmukh
              </div>
            </td>
            <td>
              <span className="rounded-md px-2.5 py-1 text-sm text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                
              Aditya Deshmukh
              </div>
            </td>
            <td>
              <span className="rounded-md px-2.5 py-1 text-sm text-white bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                
              Aditya Deshmukh
              </div>
            </td>
            <td>
              <span className="rounded-md px-2.5 py-1 text-sm text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

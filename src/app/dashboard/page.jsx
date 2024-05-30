
import Card from '../ui/dashboard/card/page.jsx'; 
import Transactions from '../ui/dashboard/transactions/page.jsx'; 


const DashboardPage = () => {
 

  const items = [
    {
      id: 1,
      name: "Total Users",
      number: "23K",
      percentageChange: 23.048
    },
    {
      id: 2,
      name: "Stocks",
      number: "3.3M",
      percentageChange: 15.378
    },
    {
      id: 3,
      name: "Revenue",
      number: "34K",
      percentageChange: -9.256
    },
  ];

  return (
    <div className="p-5 md:p-10 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Transactions />
    </div>
  );
};

export default DashboardPage;

import { Link,usePage, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Bar } from 'react-chartjs-2';
import { Users2Icon, FileArchiveIcon,FileX2Icon,FileCheck2Icon  } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DashboardPage() {
  const cardData = [
    { title: 'Total Users', value: 0, icon:  Users2Icon},
    { title: 'Total Documents', value: 0, icon: FileArchiveIcon },
    { title: 'Total Notarized Documents', value: 0, icon: FileCheck2Icon },
    { title: 'Total Declined Documents', value: 0, icon: FileX2Icon },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Documents',
        data: [30, 45, 60, 80, 100, 120, 140, 160, 120, 200, 220, 240],
        backgroundColor: 'rgba(47, 54, 95, 0.5)',
        borderColor: 'rgba(47, 54, 95, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Documents Over the Year',
      },
    },
  };

const { auth } = usePage<{ auth: { user: any } }>().props;
  const userInfo = auth.user;
  //Check if the user is an owner
  if(!userInfo.owner){
    //redirect to dashboard
    router.get(route('get-started'));
    return;
  }
  
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg p-4 dashboard-card"
          >
            
            <h1 className="font-bold">{card.value}</h1>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <card.icon size={120} className="mx-auto" />
            
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-full" >
        <Bar data={chartData} options={chartOptions} height={350}/>
      </div>
    </div>
  );
}

DashboardPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Dashboard" children={page} />
);

export default DashboardPage;

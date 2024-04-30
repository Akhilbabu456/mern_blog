import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import { AreaChart } from '@saas-ui/charts'
const data = [
  {
    date: 'Dec 1',
    Backend: 40,
    Frontend: 21,
  },
  {
    date: 'Dec 2',
    Backend: 38,
    Frontend: 22,
  },
  {
    date: 'Dec 3',
    Backend: 49,
    Frontend: 22,
  },
  {
    date: 'Dec 4',
    Backend: 48,
    Frontend: 29,
  },
  {
    date: 'Dec 5',
    Backend: 50,
    Frontend: 22,
  },
  {
    date: 'Dec 6',
    Backend: 42,
    Frontend: 30,
  },
  {
    date: 'Dec 7',
    Backend: 41,
    Frontend: 28,
  },
  {
    date: 'Dec 8',
    Backend: 44,
    Frontend: 23,
  },
  {
    date: 'Dec 9',
    Backend: 44,
    Frontend: 24,
  },
  {
    date: 'Dec 10',
    Backend: 44,
    Frontend: 30,
  },
  {
    date: 'Dec 11',
    Backend: 46,
    Frontend: 25,
  },
  {
    date: 'Dec 12',
    Backend: 48,
    Frontend: 25,
  },
  {
    date: 'Dec 13',
    Backend: 46,
    Frontend: 25,
  },
  {
    date: 'Dec 14',
    Backend: 50,
    Frontend: 28,
  },
  {
    date: 'Dec 15',
    Backend: 42,
    Frontend: 34,
  },
  {
    date: 'Dec 16',
    Backend: 58,
    Frontend: 33,
  },
  {
    date: 'Dec 17',
    Backend: 49,
    Frontend: 35,
  },
  {
    date: 'Dec 18',
    Backend: 44,
    Frontend: 33,
  },
  {
    date: 'Dec 19',
    Backend: 46,
    Frontend: 35,
  },
  {
    date: 'Dec 20',
    Backend: 44,
    Frontend: 35,
  },
  {
    date: 'Dec 21',
    Backend: 51,
    Frontend: 30,
  },
  {
    date: 'Dec 22',
    Backend: 58,
    Frontend: 36,
  },
  {
    date: 'Dec 23',
    Backend: 46,
    Frontend: 30,
  },
  {
    date: 'Dec 24',
    Backend: 61,
    Frontend: 30,
  },
  {
    date: 'Dec 25',
    Backend: 56,
    Frontend: 33,
  },
  {
    date: 'Dec 26',
    Backend: 55,
    Frontend: 33,
  },
  {
    date: 'Dec 27',
    Backend: 47,
    Frontend: 32,
  },
  {
    date: 'Dec 28',
    Backend: 55,
    Frontend: 33,
  },
  {
    date: 'Dec 29',
    Backend: 61,
    Frontend: 32,
  },
  {
    date: 'Dec 30',
    Backend: 62,
    Frontend: 29,
  },
  {
    date: 'Dec 31',
    Backend: 52,
    Frontend: 37,
  },
]

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}
      {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}

     


    <Card>
      <CardHeader pb="0">
        <Heading as="h4" fontWeight="medium" size="md">
          Developers
        </Heading>
      </CardHeader>
      <CardBody>
        <AreaChart
          data={data}
          categories={['Backend', 'Frontend']}
          height="300px"
        />
      </CardBody>
    </Card>
 
    </div>
  );
}

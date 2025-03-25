import MainMenuItem from '@/Components/Menu/MainMenuItem';
import { Bell, Book, Building, CircleGauge, Printer, RocketIcon, User, Users } from 'lucide-react';
import { usePage } from '@inertiajs/react';

interface MainMenuProps {
  className?: string;
}

export default function MainMenu({ className }: MainMenuProps) {

  const { auth } = usePage<{ auth: { user: any } }>().props;
  const userInfo = auth.user;
  return (
    <div className={className}>
      {
        userInfo.owner &&(
         <MainMenuItem
        text="Dashboard"
        link="dashboard"
        icon={<CircleGauge size={20} />}
      /> 
        )
      }
      <MainMenuItem
        text="Get Started"
        link="get-started"
        icon={<RocketIcon size={20} />}
      />
      <MainMenuItem
        text="Documents"
        link="documents"
        icon={<Book size={20} />}
      />
      {userInfo.owner && (
        <MainMenuItem
          text="Manage Users"
          link="users"
          icon={<User size={20} />}
        />
      )
      }

      <MainMenuItem
        text="Updates log"
        link="updates"
        icon={<Bell size={20} />}
      />

    </div>
  );
}

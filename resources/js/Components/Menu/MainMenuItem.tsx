import { Link } from '@inertiajs/react';
import classNames from 'classnames';

interface MainMenuItemProps {
  icon?: React.ReactNode;
  link: string;
  text: string;
}

export default function MainMenuItem({ icon, link, text }: MainMenuItemProps) {
  const isActive = route().current(link + '*');

  const iconClasses = classNames({
    'text-active': isActive,
    'text-indigo-400 group-hover:text-orange': !isActive
  });

  const textClasses = classNames({
    'text-active': isActive,
    'text-indigo-200 group-hover:text-orange': !isActive
  });

  return (
    <div className="mb-4">
      <Link
        href={route(link)}
        className="flex items-center group py-3 space-x-3"
      >
        <div className={iconClasses}>{icon}</div>
        <div className={textClasses}>{text}</div>
      </Link>
    </div>
  );
}

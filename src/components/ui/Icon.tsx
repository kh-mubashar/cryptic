interface IIconProps {
  name: 'search' | 'notification' | 'dashboard' | 'markets' | 'portfolio' | 'alerts';
  className?: string;
}

const iconMap = {
  search: '🔍',
  notification: '🔔',
  dashboard: '📊',
  markets: '📈',
  portfolio: '💼',
  alerts: '🔔',
};

export const Icon = ({ name, className = '' }: IIconProps) => {
  return <span className={className}>{iconMap[name]}</span>;
};

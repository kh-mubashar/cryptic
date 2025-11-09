import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
}

const Avatar = ({ src, name, size = 32, className = '' }: AvatarProps) => {
  const imageSrc = src || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}`;
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        className="rounded-full object-cover w-full h-full"
        src={imageSrc}
        alt={name || 'User'}
        width={size}
        height={size}
        priority={true}
      />
    </div>
  );
};

export default Avatar;

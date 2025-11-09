import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function DashboardLoading() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <LoadingSpinner />
    </div>
  );
}

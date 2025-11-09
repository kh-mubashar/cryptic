'use client';

import { ErrorMessage } from '@/components/ui/ErrorMessage';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorMessage
      message="There was a problem loading the alerts page"
      action={{
        label: 'Try again',
        onClick: reset,
      }}
    />
  );
}

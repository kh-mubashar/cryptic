'use client';

import { Component, ReactNode } from 'react';
import { ErrorMessage } from '../ui/ErrorMessage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage
          title="Something went wrong"
          message={this.state.error?.message || 'An unexpected error occurred'}
          action={{
            label: 'Try again',
            onClick: () => window.location.reload(),
          }}
        />
      );
    }

    return this.props.children;
  }
}

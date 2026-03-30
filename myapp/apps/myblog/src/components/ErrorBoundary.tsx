import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackUI: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackUI ?? <h1>에러발생</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

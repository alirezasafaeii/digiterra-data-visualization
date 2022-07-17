import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, IState> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  logErrorToMyService = (error: any, errorInfo: ErrorInfo) => {
    console.log("error :>> ", error);
    console.log("errorInfo :>> ", errorInfo);
  };

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    this.logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

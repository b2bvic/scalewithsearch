import React, { Component, ReactNode, ErrorInfo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-red-500 font-mono flex flex-col items-center justify-center p-8 border-4 border-red-600 m-4">
          <AlertTriangle size={64} className="mb-6 animate-pulse" />
          <h1 className="text-2xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-center">System_Failure</h1>
          <p className="text-xl mb-8 border-b-2 border-red-500 pb-2 text-center">CRITICAL RUNTIME EXCEPTION DETECTED</p>
          <div className="bg-red-900/20 p-6 border-2 border-red-500 w-full max-w-3xl overflow-auto shadow-[8px_8px_0px_0px_rgba(220,38,38,0.5)]">
            <code className="text-sm md:text-base break-words">
              {this.state.error?.toString() || "Unknown Error Occurred"}
            </code>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-12 px-8 py-4 bg-red-600 text-black font-black uppercase text-xl hover:bg-red-500 transition-colors shadow-[4px_4px_0px_0px_#fff]"
          >
            Reboot_System
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
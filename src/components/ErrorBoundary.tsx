import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    try {
      sessionStorage.clear();
      localStorage.clear();
    } catch {
      /* ignore */
    }
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#07070a] px-6 text-center text-[#f4f1ec]">
          <div className="max-w-md rounded-2xl border border-white/10 bg-[#0e0e13] p-8 shadow-2xl">
            <span className="font-display text-4xl text-[#e5132b] sm:text-5xl">MOHAMMED REHAN</span>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#ff3d5a]">THE SERIES • PLAYBACK ERROR</p>
            <p className="mt-4 text-sm text-[#a7a6ad]">
              A temporary display error occurred. Click below to refresh the experience.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#e5132b] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#ff3d5a]"
            >
              ▶ Restart Series
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

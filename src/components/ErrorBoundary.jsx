import React from "react";
import "../styles/error-boundary.css";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary-container">
          <h1>Ooops.....Something went wrong!</h1>
          <h2>Try to reload page</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

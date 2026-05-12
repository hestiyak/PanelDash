// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PanelDash title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PanelDash/i);
    expect(titleElement).toBeInTheDocument();
});

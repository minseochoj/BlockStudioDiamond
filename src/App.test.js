// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockStudioDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockStudioDiamond/i);
    expect(titleElement).toBeInTheDocument();
});

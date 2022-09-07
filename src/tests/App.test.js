import { render, screen , within} from '@testing-library/react';
import App from '../App';
import Sum from '../components/sum/Sum'

test('renders app component', () => {
  render(<App />);
  const linkElement = screen.getByTitle('main');
  expect(linkElement).toBeInTheDocument();
});

test('renders sum component inside app component', () => {
  const { getByTitle, getByText } = render(<App />);
  const app = getByTitle('main')
  const sumHeader = within(app).getByText(/simple calculator/i)
  expect(sumHeader).toBeInTheDocument();
});

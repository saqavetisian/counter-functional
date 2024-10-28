// __tests__/StageC.test.js
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import StageC from '@/app/stage-c/page';
import { getMockNumber } from '@/requests/index';

global.IntersectionObserver = class {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Simulate the intersection event
    this.callback([{ isIntersecting: true }]);
  }
};

jest.mock('@/requests/index', () => ({
  getMockNumber: jest.fn(),
}));

jest.mock('@/components/ui/Button', () => (props) => (
  <button {...props}>{props.children}</button>
));

jest.mock('@/components/ui/Error', () => () => <div>Error loading data</div>);

describe('Stage C Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with initial count from API', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });


    render(await StageC());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());
  });

  test('shows error component when API call fails', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: false,
    });

    render(await StageC());

    await waitFor(() => expect(screen.getByText('Error loading data')).toBeInTheDocument());
  });

  test('increments count when Increment button is clicked', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageC());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());

    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);

    expect(screen.getByText('Count: 6')).toBeInTheDocument();
  });

  test('decrements count when Decrement button is clicked', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageC());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());

    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);

    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });

  test('randomizes count when Randomize button is clicked', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageC());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());

    const randomizeButton = screen.getByText('Randomize');
    fireEvent.click(randomizeButton);

    // Check if the count is now a new random number between 0 and 99
    const newCount = parseInt(screen.getByText(/Count: \d+/).textContent.replace('Count: ', ''));
    expect(newCount).toBeGreaterThanOrEqual(0);
    expect(newCount).toBeLessThan(100);
  });
});

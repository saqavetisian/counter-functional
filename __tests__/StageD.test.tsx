// __tests__/StageD.test.js
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import StageD from '@/app/stage-d/page';
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
jest.mock('@/components/ui/Divider', () => () => <div className="my-4 border-t w-full" />);

describe('StageD Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders StageD with initial count from API', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageD());

    await waitFor(() => {
      expect(screen.getByText('Counter Stage D')).toBeInTheDocument();
      expect(screen.getByText('Count: 5')).toBeInTheDocument();
    });
  });

  test('shows error component when API call fails', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: false,
    });

    render(await StageD());

    await waitFor(() => {
      expect(screen.getByText('Error loading data')).toBeInTheDocument();
    });
  });

  test('adds a new counter instance when "+ add new counter" button is clicked', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageD());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());

    const addButton = screen.getByText('+ add new counter');
    fireEvent.click(addButton);

    await waitFor(() => {
      const counters = screen.getAllByText('Count: 5');
      expect(counters.length).toBe(2); // Should render two instances with count 5
    });
  });

  test('increments count when Increment button is clicked', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageD());

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

    render(await StageD());

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

    render(await StageD());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());

    const randomizeButton = screen.getByText('Randomize');
    fireEvent.click(randomizeButton);

    // Check if the count is now a new random number between 0 and 99
    const newCount = parseInt(screen.getByText(/Count: \d+/).textContent.replace('Count: ', ''));
    expect(newCount).toBeGreaterThanOrEqual(0);
    expect(newCount).toBeLessThan(100);
  });
});

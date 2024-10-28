// __tests__/StageB.test.js
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import StageB from '@/app/stage-b/page';
import { getMockNumber } from '@/requests/index';

jest.mock('@/requests/index', () => ({
  getMockNumber: jest.fn(),
}));

jest.mock('@/components/ui/Button', () => (props) => (
  <button {...props}>{props.children}</button>
));

jest.mock('@/components/ui/Error', () => () => <div>Error loading data</div>);

describe('Stage B Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with initial count from API', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });


    render(await StageB());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());
  });

  test('shows error component when API call fails', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: false,
    });

    render(await StageB());

    await waitFor(() => expect(screen.getByText('Error loading data')).toBeInTheDocument());
  });

  test('increments count when Increment button is clicked', async () => {
    getMockNumber.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ number: 5 }),
    });

    render(await StageB());

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

    render(await StageB());

    await waitFor(() => expect(screen.getByText('Count: 5')).toBeInTheDocument());

    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);

    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });
});

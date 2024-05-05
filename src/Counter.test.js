import { fireEvent, getByTestId, render } from '@testing-library/react';
import Counter from './Counter';

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId('count').textContent);
    expect(countValue).toEqual(0);
  });
  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole("button", { name: "Increment" }); // element with role button and text Increment
    const initialCountValue = Number(getByTestId('count').textContent);
    expect(initialCountValue).toEqual(0);
    fireEvent.click(incrementButton);
    const incrementedCountValue = Number(getByTestId('count').textContent);
    expect(incrementedCountValue).toEqual(1);
  })
  it('count should decrement by 1 if the decrement button is clicked', () => {
    const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
    const initialCountValue = Number(getByTestId("count").textContent);
    expect(initialCountValue).toEqual(0);
    const decrementButton = getByRole("button", { name: "Decrement"});
    fireEvent.click(decrementButton);
    const decrementedCountValue = Number(getByTestId("count").textContent);
    expect(decrementedCountValue).toEqual(-1);
  })
  it('count should be reset to 0 if the restart button is clicked', () => {
    const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
    const initialCountValue = Number(getByTestId("count").textContent);
    expect(initialCountValue).toEqual(0);
    const resetButton = getByRole("button", { name: "Restart" });
    fireEvent.click(resetButton);
    const resetCountValue = Number(getByTestId("count").textContent);
    expect(resetCountValue).toEqual(0);
  })
  it("count should change the sign if the switch signs button is clicked", () => {
   const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
   const incrementButton = getByRole("button", { name: "Increment" }); // element with role button and text Increment
   const initialCountValue = Number(getByTestId("count").textContent);
   expect(initialCountValue).toEqual(0);
   fireEvent.click(incrementButton);
   const incrementedCountValue = Number(getByTestId("count").textContent);
   expect(incrementedCountValue).toEqual(1);


   const switchSignsButton = getByRole("button", { name: "Switch Signs" }); // element with role button and text Increment
   fireEvent.click(switchSignsButton);
   const switchedSignsCountValue = Number(getByTestId("count").textContent);
   expect(switchedSignsCountValue).toEqual(-1);
   
  });
});
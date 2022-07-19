import {fireEvent, render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import App from '../../App';
import {store} from '../../store/store';
import {Provider} from 'react-redux';
import React from 'react';
import userEvent from '@testing-library/user-event';
import "../jestSetup"

function rendering() {
  const {} = render(<Provider store={store}>
    <App/>
  </Provider>);
  return fireEvent.click(screen.getByRole('button', {name: /Login/i}));
};
describe('NavBar testing', () => {
  it('AuthModal should contain all implemented component on initial', async () => {
    rendering();
    // eslint-disable-next-line testing-library/no-debugging-utils
   // screen.debug(undefined, 300000);
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: /Login/i})).toBeInTheDocument();
    expect(screen.getByLabelText('Email *')).toBeInTheDocument();
    expect(screen.getByLabelText('Password *')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Submit/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Cancel/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Clear/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /REGISTER/i})).toBeInTheDocument();
  });
  it('AuthModal should contain all implemented components after REGISTER click', async () => {
    rendering();
    fireEvent.click(await screen.findByRole('button', {name: /REGISTER/i}));
    expect(await screen.findByRole('heading', {name: /Register/i})).toBeInTheDocument();
    expect(await screen.findByLabelText('Email *')).toBeInTheDocument();
    expect(await screen.findByLabelText('Password *')).toBeInTheDocument();
    expect(await screen.findByLabelText('Confirm Password *')).toBeInTheDocument();
    expect(await screen.findByLabelText('Name *')).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: /Submit/i})).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: /Cancel/i})).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: /Clear/i})).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: /LOGIN/i})).toBeInTheDocument();
  });
  it('AuthModal should clear all inputs on Clear button click', async () => {
    rendering();
    const email = screen.getByLabelText('Email *')
    const password = screen.getByLabelText('Password *')
    await userEvent.type(password, 'ThisIsPassword');
    await userEvent.type(email, 'ThisIsEmail')

    expect(password).toHaveValue('ThisIsPassword');
    expect(email).toHaveValue('ThisIsEmail');
    fireEvent.click(screen.getByRole('button', {name: /Clear/i}))
    expect(password).toHaveValue("");
    expect(email).toHaveValue("");
  });
  it('AuthModal should close on Cancel button click', async () => {
    rendering();
    const cancel = screen.getByRole('button', {name: /Cancel/i})
    await userEvent.click(cancel);
    await waitForElementToBeRemoved(screen.queryByRole('dialog'))
    expect(screen.queryByRole('dialog')).toBeNull()
    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug(undefined, 300000);
    console.log('ITS DEBUG');
  });
  it('AuthModal should send data on Submit button click', async () => {
    rendering();
    const submit = screen.getByRole('button', {name: /Submit/i})
    const email = screen.getByLabelText('Email *')
    const password = screen.getByLabelText('Password *')
    await userEvent.type(password, 'ThisIsPassword');
    await userEvent.type(email, 'ThisIsEmail@gmail.com')
    await userEvent.click(submit);
    await waitForElementToBeRemoved(screen.queryByRole('dialog'), {timeout:5000})
    expect(screen.queryByRole('dialog')).toBeNull()
    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug(undefined, 300000);
    console.log('ITS DEBUG');
  });
});

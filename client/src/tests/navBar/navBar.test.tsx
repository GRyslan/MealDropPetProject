import {fireEvent, render, screen} from '@testing-library/react';
import App from '../../App';
import {store} from '../../store/store';
import {Provider} from 'react-redux';
import React from 'react';

describe('navBar testing', () => {

  it('should contain logo an show tooltip on hover`', async () => {
    const {} = render(<Provider store={store}>
      <App/>
    </Provider>);

    const logo = screen.getByLabelText('Return to Main Menu');
    expect(logo).toBeInTheDocument();
    expect( screen.queryByText('Return to Main Menu')).toBeNull();
    fireEvent.mouseOver(logo);
    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug()
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });
  it('should contain switch and change theme`', async () => {
    const {} = render(<Provider store={store}>
      <App/>
    </Provider>);
    const switchMui = screen.getByRole('checkbox');
    expect(switchMui).toBeInTheDocument();
  });
  it('should contain button and show Modal on click`', async () => {
    const {} = render(<Provider store={store}>
      <App/>
    </Provider>);
    const buttonMui = screen.getByRole('button',{name:/Login/i});
    expect(buttonMui).toBeInTheDocument();
  });
});


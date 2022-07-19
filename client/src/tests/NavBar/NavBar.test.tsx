import {fireEvent, render, screen} from '@testing-library/react';
import App from '../../App';
import {store} from '../../store/store';
import {Provider} from 'react-redux';
import React from 'react';
import {DARK_LIGHT_BLUE, LIGHT_GRAY} from '../../ui/StyledNavBar';
import {LIGHT_DARK_GRAY} from '../../ui/generalComponents/StyledButton';

function rendering(){
  return  {} = render(<Provider store={store}>
  <App/>
</Provider>)
};
describe('NavBar testing', () => {
  it('Navbar should contain all implemented components after initial download',()=>{
    rendering()
    const logo = screen.getByLabelText('Return to Main Menu');
    const switchMui = screen.getByRole('checkbox');
    const login = screen.getByRole('button',{name:/Login/i});
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle(`fill:${LIGHT_GRAY}`);
    expect(switchMui).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(login).toHaveStyle(`backgroundColor:${LIGHT_DARK_GRAY}`);

  })
  it('should show tooltip on logo hover`', async () => {
    rendering()
    expect( screen.queryByText('Return to Main Menu')).toBeNull();
    fireEvent.mouseOver(screen.getByLabelText('Return to Main Menu'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });
  it('should  change theme`', async () => {
    rendering()
    fireEvent.click(screen.getByRole('checkbox'))
    expect(await screen.findByLabelText('Return to Main Menu')).toHaveStyle(`fill:${DARK_LIGHT_BLUE}`)
    expect(screen.getByRole('button',{name:/Login/i})).toHaveStyle(`backgroundColor:${DARK_LIGHT_BLUE}`);
    fireEvent.click(screen.getByRole('checkbox'))
    expect(await screen.findByLabelText('Return to Main Menu')).toHaveStyle(`fill:${LIGHT_GRAY}`)
    expect(screen.getByRole('button',{name:/Login/i})).toHaveStyle(`backgroundColor:${LIGHT_DARK_GRAY}`);

  });
  it('should show Modal on Login click`', async () => {
    rendering()
    fireEvent.click(screen.getByRole('button',{name:/Login/i}))
    expect(await screen.findByRole('dialog')).toBeInTheDocument()

  });
});


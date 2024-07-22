import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Sidebar } from '../Sidebar.ui';
import { SidebarMobile } from '../Sidebar.ui';

describe('testing Sidebar component', () => {
  const user = userEvent.setup();

  it('render', () => {
    render(
      <MemoryRouter>
        <Sidebar
          balanceUSDT={24243}
          balanceRub={24324}
          user={{
            id: 1,
            name: 'London',
            avatar: 'test',
            url: '/test',
            role: 'Operator',
          }}
          notifications={{
            Dashboard: 1,
            Balance: 1,
            Projects: 1,
            Invoices: 15,
            Transactions: 0,
            Account: 1,
          }}
          timeRemaining={'Time remaining: 60 m 00s'}
          links={{
            Dashboard: '/d',
            Balance: '/b',
            Projects: '/p',
            Invoices: '/i',
            Transactions: '/t',
            Account: '/a',
            DashboardSucces: '/ds',
            DashBoardUnSucces: '/du',
            DashBoardAppeal: '/da',
            DashboardProcessing: '/dp',
            BalanceInfo: '/bi',
            BalanceTransaction: '/bt',
            AccAll: '/al',
            AccGeneral: '/ag',
          }}
          isOpenModal={true}
          changeLanguage={() => confirm('d')}
          cbAvatar={() => confirm('open')}
          cbMyProfile={() => confirm('cbMyProfile')}
          cbEditProfile={() => confirm('cbEditProfile')}
          textEditProfile="textEditProfile"
          textMyProfile="textMyProfile"
          activeLng={'en'}
          cbLogOut={() => {}}
          cbSupport={() => {}}
          cbTheme={() => {}}
        />
      </MemoryRouter>
    );

    const linkElement = screen.getAllByTestId('link');
    const element = screen.getByTestId('sidebar');

    user.click(linkElement[0]);

    expect(element).toBeInTheDocument();
  });

  it('render mobile', () => {
    render(
      <MemoryRouter>
        <SidebarMobile
          userName="Regexer"
          avatarUrl="/53453"
          onOpenSidebar={() => confirm('click')}
        />
      </MemoryRouter>
    );

    const menuElement = screen.getByTestId('menu');
    const element = screen.getByTestId('sidebar');

    user.click(menuElement);

    expect(element).toBeInTheDocument();
  });
});

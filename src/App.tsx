import { Outlet, Router } from '@tanstack/react-location';
import { location, routes } from '@/router';

import { Content } from '@/components';
import { Navbar } from '@/features/Navbar';

function App() {
  return (
    <Router location={location} routes={routes}>
      <Content className='absolute inset-0 fill-current font-mp-sans'>
        <Navbar routes={routes} />
        <Outlet />
      </Content>
    </Router>
  );
}

export default App;

import NProgress from 'nprogress';
import Router from 'next/router';
import Navi from './Navi';
import { Container } from 'reactstrap';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
	<Container fluid>
		<Navi />
	</Container>
);

export default Header;

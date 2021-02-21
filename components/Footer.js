import { useState } from 'react';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Container, Alert } from 'reactstrap';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Footer = () => {
    const [count, setCount] = useState(0);

    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
        setCount(count + 1);
	}
	
	return (
		<div>
			<Container fluid className="bg-primary text-white">
				<p align="center">
					<Link href="/"><a>Home</a></Link>&nbsp;|&nbsp;
					<Link href="/contact/"><a>Contact</a></Link>&nbsp;|&nbsp;
					<Link href="/privacy/"><a>Privacy Policy</a></Link>
				</p>
				<p align="center">
					&copy; {(new Date().getFullYear())} GalacticBlue. All rights reserved.
				</p>
				<p align="center">
					<img src="https://galacticblue.net/img/gb-logo-3-long-dark.png" height="42" alt="GalacticBlue" border="0" />
				</p>
			</Container>
			{count == 0 &&
				<Alert isOpen={visible} toggle={onDismiss} className="fixed-bottom">
					<h4 className="alert-heading">Our Commitment to Your Privacy</h4>
					<p>
						GalacticBlue handles a lot of sensitive information for numerous clients and partners. This is why we take great pride in making sure this information remains private and confidential, as well as make sure that your privacy as a customer of ours remains intact. Please refer to our privacy policy for further details.
					</p>
				</Alert>
			}
		</div>
	)
};



export default Footer;

import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { PageTransition } from 'next-page-transitions';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
    	let pageProps = {};
    	if (Component.getInitialProps) {
    		pageProps = await Component.getInitialProps(ctx);
    	}
    
		pageProps.query = ctx.query;
    	return { pageProps };
  	}
	render() {
    	const { Component, apollo, pageProps } = this.props;
		
		return (
			<Container>
				<ApolloProvider client={apollo}>
					<Page>
						<PageTransition timeout={300} classNames="page-transition">
							<Component {...pageProps} />
						</PageTransition>
						<style jsx global>{`
							.page-transition-enter {
								opacity: 0;
							}
							.page-transition-enter-active {
								opacity: 1;
								transition: opacity 300ms;
							}
							.page-transition-exit {
								opacity: 1;
							}
							.page-transition-exit-active {
								opacity: 0;
								transition: opacity 300ms;
							}
						`}</style>
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withData(MyApp);

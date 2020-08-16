import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apolloClient';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const client = useApollo();

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;

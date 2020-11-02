import '../styles/index.css';

import { ApolloProvider } from '@apollo/client';
import { IconContext } from 'react-icons';

import { useApollo } from 'lib/apolloClient';

function MyApp({ Component, pageProps }) {
	const client = useApollo();

	return (
		<ApolloProvider client={client}>
			<IconContext.Provider value={{ className: 'w-8 h-8' }}>
				<Component {...pageProps} />
			</IconContext.Provider>
		</ApolloProvider>
	);
}

export default MyApp;

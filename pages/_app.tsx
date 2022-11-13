import 'styles/globals.scss';
import 'styles/nullstyle.scss';
import 'styles/dropdown.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;

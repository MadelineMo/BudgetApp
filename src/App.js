/**
 * ./src/App.js
 * - app bootstrap
 */

// import react js base library
import React from 'react';

// import custom components
import { ContentText, Header, Main, Wrapper } from './components/structure.js';

// import default app styles
import { styles } from './styles/default.js';

const App = () => {

	return (

		<Wrapper style={styles.wrapper}>
			<Header style={styles.screenHeader} type={styles.h1} heading="Home" />
			<Main style={styles.main}>
				<ContentText style={styles.defaultText}>
					Hello there!	
				</ContentText>
			</Main>
		</Wrapper>
		
	);
};

export default App;

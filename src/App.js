import React from "react";
import Routes from "./router/index";
import { UseWalletProvider } from "use-wallet";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';


import BlockchainProvider from "./context";

function App() {
	return (
		<UseWalletProvider
			chainId={4002}
			connectors={{
				portis: { dAppId: "horse" },
			}}>
			<BlockchainProvider>
				<Routes />
			</BlockchainProvider>
			<NotificationContainer />
		</UseWalletProvider>
	);
}

export default App;

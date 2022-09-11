import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./App.css";

// import pages
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Dbd from "./pages/dbd/Dbd";
import Asts from "./pages/asts/Asts";
import Trns from "./pages/trns/Trns";
import Erfs from "./pages/erfs/Erfs";
import Bok from "./pages/bok/Bok";
import Admin from "./pages/admin/Admin";
import Unp from "./pages/unps/Unp";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Signout from "./pages/signout/Signout";
import NoPageFound from "./pages/errors/NoPageFound";
import Modal from "./components/modals/Modal";

// import ModalContext and UserContext
import ModalContextProvider from "./contexts/ModalContext.js";
import { UserContextProvider } from "./contexts/UserContext";
import { MenuContextProvider } from "./contexts/MenuContext";

// console.log(`UserContext`, UserContext)
// console.log(`UserContextProvider`, UserContextProvider)

function App() {
	return (
		<ModalContextProvider>
			<UserContextProvider>
				<MenuContextProvider>
					<div className="App">
						<BrowserRouter>
							{/* <Header /> */}

							<div className="pages">
								<Routes>
									<Route path="/" element={<Header />}>
										<Route index element={<Home />} />
										{/* dashboard section -----------------------------------------------------*/}
										{/* path to dashboard main page [ml1 = dbd] */}
										<Route path="/dbd">
											<Route index element={<Dbd />} />
											{/* ml2 = 'asts' or 'trns' or 'unps' */}
											<Route path=":ml2" element={<Dbd />} />
											{/* <Route path="meter" element={<DbdSub />} /> */}
										</Route>
										{/* assets section -----------------------------------------------------*/}
										{/* path to assets main page [ml1 = asts] */}
										<Route path="/asts">
											<Route index  element={<Asts />} />
											{/* ml2 = 'vtcts' or 'trfs'[transformers] or 'fds'[feeders] or 'pls'[ploes] or 'bxs'[boxes] or 'ems'[electricity meters] or 'cbs'[circuit breakers] or sls[seals] */}
											<Route path=":ml2" element={<Asts />} />
										</Route>

										{/* transactions section -----------------------------------------------------*/}
										{/* path to assets main page [ml1 = trns] */}
										<Route path="/trns" element={<Trns />}>
											{/* ml2 = 'grv' or 'inst'[installation] or 'com'[comissioning] or 'dcn'[disconnection] or 'rcn'[reconnection] or 'aud'[audits] or 'vnd'[vending] or mis[missing] or fnd[found] or ret[returned] or dcm[decomissioned] */}
											<Route path=":ml2" element={<Trns />} />
										</Route>

										{/* erfs section -----------------------------------------------------*/}
										{/* path to assets main page [ml1 = erfs] */}
										<Route path="/erfs" element={<Erfs />}></Route>

										{/* body of knowledge section -----------------------------------------------------*/}
										{/* path to assets bok page [ml1 = bok] */}
										<Route path="/bok" element={<Bok />}></Route>

										{/* admin section -----------------------------------------------------*/}
										{/* path to admin main page [ml1 = admin] */}
										<Route path="/admin" element={<Admin />}>
											{/* ml2 = 'sytt'[system tables] or 'unps'[users] or 'mdvs'[mobile devices] or 'sics'[sim cards] or erfs[ervens] */}
											<Route path=":ml2" element={<Admin />}>
												<Route path=":ml3" element={<Admin />} />
											</Route>
										</Route>

										{/* TODO: Attend to the issue of displaying Unp for a signedin user */}
										{/* unp section (signedin user)-----------------------------------------------------*/}
										{/* path to unp main page [ml1 = unp] */}
										<Route path="/unp" element={<Unp />}>
											{/* ml2 = ''[] or ''[] or ''[] or ''[] */}
											<Route path=":ml2" element={<Unp />} />
										</Route>

										{/* signup section -----------------------------------------------------*/}
										{/* path to signup main page [ml1 = signup] */}
										{/* <Route path="/signup" element={<Signup />} /> */}

										{/* signin section -----------------------------------------------------*/}
										{/* path to signin main page [ml1 = signin] */}
										{/* <Route path="/signin" element={<Signin setLoggedOn={setLoggedOn} />} /> */}

										{/* signout section -----------------------------------------------------*/}
										{/* path to signout main page [ml1 = signout] */}
										<Route path="/signout" element={<Signout />} />

										<Route path="*" element={<NoPageFound />} />
									</Route>
								</Routes>

								<Modal />
							</div>
						</BrowserRouter>
					</div>
				</MenuContextProvider>
			</UserContextProvider>
		</ModalContextProvider>
	);
}

export default App;

// TODO: introduce BrouseRouter and do all pages and components

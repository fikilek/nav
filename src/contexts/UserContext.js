import React, { createContext, useState } from "react";

// Create context:
// UserContext: to query the context state
export const UserContext = createContext();

// Create a use object
const userObj = {
	surname: "kentane",
	name: "fikile",
	email: "fikilekentane@gmail.com",
	role: "super-user",
	"signedon": false,
};

// A "provider" is used to encapsulate only the
// components that needs the state in this context
export const UserContextProvider = props => {
	// console.log(`props`, props);
	const [user, setUser] = useState(userObj);
	// console.log(`windowToOpen`, windowToOpen);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	);
};


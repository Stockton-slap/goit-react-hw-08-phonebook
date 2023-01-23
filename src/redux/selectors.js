export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectAuthName = state => state.auth.user.name;
export const selectAuthEmail = state => state.auth.user.email;
export const selectAuthNumber = state => state.auth.user.number;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsError = state => state.auth.isError;
export const selectIsAuthLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;

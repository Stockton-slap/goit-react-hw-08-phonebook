export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectAuth = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

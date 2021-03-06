import {createSelector} from 'reselect';

const accounts = state => state.accounts;  
const currentAccount = state => state.currentAccount;  
const user = state => state.user;  
const replenishAccount = state => state.replenishAccount;  
const transferAccount = state => state.transferAccount;  
const transferEachOtherAccount = state => state.transferEachOtherAccount;  
const form = state => state.form;  
const changeUserPassword = state => state.changeUserPassword;  
const changeUserProfile = state => state.changeUserProfile;  
const paymentAccount = state => state.paymentAccount;  
const createTemplate = state => state.createTemplate;  
const accountHistory = state => state.accountHistory;  

export const formValueSelector = createSelector(form, form => form);
export const accountsList = createSelector(accounts, accounts => accounts.accounts);
export const userId = createSelector(user, user => user.userId);
export const userSelector = createSelector(user, user => user);
export const accountsLoader = createSelector(accounts, accounts => accounts.isAccountsLoader);
export const accountsLengthSelector = createSelector(accounts, accounts => accounts.accounts.length);
export const accountsBalanceSelector = createSelector(accounts, accounts => checkAccountBalance(accounts.accounts.reduce((sum, current) => sum + parseFloat(current.accountBalance), 0)));
export const currentAccountLoader = createSelector(currentAccount, current => current.isCurrentAccountLoader);
export const currentAccountSelector = createSelector(accounts, currentAccount, (accounts, current) => accounts.accounts[current.currentAccount]);
export const currentAccountValueSelector = createSelector(accounts, currentAccount, (accounts, current) => accounts.accounts[current.currentAccount].id);
export const currentAccountBalanceSelector = createSelector(accounts, currentAccount, (accounts, current) => {
    const account = accounts.accounts[current.currentAccount];
    if (account)
        return checkAccountBalance(account.accountBalance);
    return "0.00"
});
export const lastAccountSelector = createSelector(accounts, (accounts) => accounts.accounts[accounts.length-2]);
export const lastAccountIdSelector = createSelector(accounts, (accounts) => {
    if (accounts.accounts.length !== 0)
        return accounts.accounts[accounts.accounts.length-1].id
    return null
});
export const lastAccountIndexSelector = createSelector(accounts, (accounts) => accounts.accounts.length-2);
export const transferAccountLoaderSelector = createSelector(transferAccount, transfer => transfer.isTransferAccountLoader);
export const transferAccountModalShow = createSelector(transferAccount, transfer => transfer.isModalShow);
export const transferEachOtherAccountLoaderSelector = createSelector(transferEachOtherAccount, transfer => transfer.loader);
export const transferEachOtherAccountModalShowSelector = createSelector(transferEachOtherAccount, transfer => transfer.isModalShow);
export const replenishAccountLoaderSelector = createSelector(replenishAccount, replenish => replenish.isReplenishAccountLoader);
export const replenishAccountSuccessSelector = createSelector(replenishAccount, replenish => replenish.isReplenishAccountSuccess);
export const replenishAccountModalShow = createSelector(replenishAccount, replenish => replenish.isModalShow);
export const changeUserPasswordModalShowSelector = createSelector(changeUserPassword, store => store.isModalShow);
export const changeUserPasswordLoaderSelector = createSelector(changeUserPassword, store => store.loader);
export const changeUserProfileModalShowSelector = createSelector(changeUserProfile, store => store.isModalShow);
export const changeUserProfileLoaderSelector = createSelector(changeUserProfile, store => store.loader);
export const changeUserProfileAvatarSelector = createSelector(changeUserProfile, store => store.img);
export const paymentAccountLoaderSelector = createSelector(paymentAccount, store => store.loader);
export const paymentAccountModalShowSelector = createSelector(paymentAccount, store => store.isModalShow);
export const createTemplateModalShowSelector = createSelector(createTemplate, store => store.isModalShow);
export const templateSelector = createSelector(createTemplate, store => store.template);
export const accountHistoryDataSelector = createSelector(accountHistory, store => store.filteredHistory ? [...store.filteredHistory].reverse() : null);
export const accountHistoryLoaderSelector = createSelector(accountHistory, store => store.loader);


export const checkAccountBalance = (value) => {
    if(!value)
        return "0.00"
    if (value.toString().indexOf('.') === -1)
    return value+=".00";
return value;
}
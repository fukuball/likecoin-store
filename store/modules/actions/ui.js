/* eslint import/prefer-default-export: "off" */
import * as types from '@/store/mutation-types';

export const setLocale = ({ commit }, locale) => {
  commit(types.UI_SET_LOCALE, locale);
};

export const setMetamaskError = ({ commit }, msg) => {
  commit(types.UI_SET_METAMASK_ERROR, msg);
};

export const startLoading = ({ commit }) => {
  commit(types.UI_START_LOADING);
};

export const stopLoading = ({ commit }) => {
  commit(types.UI_STOP_LOADING);
};

export const setErrorMsg = ({ commit }, msg) => {
  commit(types.UI_ERROR_MSG, msg);
};

export const setInfoMsg = ({ commit }, msg) => {
  commit(types.UI_INFO_MSG, msg);
};

export const setPopupError = ({ commit }, msg) => {
  commit(types.UI_POPUP_ERR, msg);
};

export const setPopupInfo = ({ commit }, msg) => {
  commit(types.UI_POPUP_INFO, msg);
};

export const setPageHeader = ({ commit }, payload) => {
  commit(types.UI_HEADER_UPDATE, payload);
};

export const closeTxDialog = ({ commit }) => {
  commit(types.UI_CLOSE_TX_DIALOG);
  commit(types.UI_SET_TX_DIALOG_ACTION, { txDialogActionRoute: null, txDialogActionText: '' });
};

export const closeInfoToolbar = ({ commit }) => {
  commit(types.UI_INFO_MSG, '');
};

export const setTxDialogAction = ({ commit }, payload) => {
  commit(types.UI_SET_TX_DIALOG_ACTION, payload);
};

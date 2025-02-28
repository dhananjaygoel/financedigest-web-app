import * as constants from "./dashboardConstants";

export const setActiveStock = (stock) => ({
  type: constants.SET_ACTIVE_STOCK,
  payload: stock
});

export const setActiveFinancialMonth = (month) => ({
  type: constants.SET_ACTIVE_FINANCIAL_MONTH,
  payload: month
})

export const addStockToWatchlist = (stock) => ({
  type: constants.ADD_STOCK_TO_WATCHLIST,
  payload: stock
})
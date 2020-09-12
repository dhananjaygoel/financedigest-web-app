import * as constants from "./dashboardConstants";

const initialState = {
  selectedCurrency: "USD",
  selectedFinancialMonth: "June",
  selectedFinancialYear: "2020",
  activeStock: {
    name: "Apple Inc.",
    marketName: "AAPL",
    percentageChange: 1.2,
    priceChange: 20,
    marketCap: "989 BN",
    priceEarnings: 22.98,
    pb: 22.98,
    dividendYield: 1.6,
    price: 458,
    timeFrame: "1w",
    peerGroups: [
      {image: 'https://via.placeholder.com/150', name: "Test", price: '2000'},
      {image: 'https://via.placeholder.com/150', name: "Test", price: '2000'},
      {image: 'https://via.placeholder.com/150', name: "Test", price: '2000'},
    ],
    financials: {
      2020: {
        June: {
          month: "June",
          year: "2020",
          revenue: "199 B",
          netIncome: "100 B",
          dilutedEPS: "0.13",
          netProfitMargin: " 17%",
          operatingIncome: "696 M",
        },
      },
    },
    yearlyFinancials: {
      2020: {
        revenue: "202 B",
        netIncome: "100 B",
        dilutedEPS: "0.13",
        netProfitMargin: "17%",
        operatingIncome: "699 M",
      },
    },
    reports: ["2020", "2017", "2016", "2015", "2014"],
    boardMeetings: [],
    corporateActions: [],
  },
  watchList: [
    {
      name: "Apple Inc.",
      marketName: "AAPL",
      percentageChange: 1.2,
      priceChange: 20,
      marketCap: "989 BN",
      priceEarnings: 22.98,
      pb: 22.98,
      dividendYield: 1.6,
      price: 458,
      timeFrame: "1w",
      financials: [
        {
          date: "June 2020",
          revenue: "",
          netIncome: "",
          dilutedEPS: "",
          netProfitMargin: "",
          operatingIncome: "",
        },
      ],
      reports: ["2020", "2017"],
      boardMeetings: [],
      corporateActions: [],
    },
    {
      name: "Amazon",
      marketName: "AMZN",
      percentageChange: -1.2,
      priceChange: -20,
      marketCap: "989 BN",
      priceEarnings: 22.98,
      pb: 22.98,
      dividendYield: 1.6,
      price: 458,
      timeFrame: "1w",
      financials: [
        {
          date: "June 2020",
          revenue: "",
          netIncome: "",
          dilutedEPS: "",
          netProfitMargin: "",
          operatingIncome: "",
        },
      ],
      reports: ["2020", "2017"],
      boardMeetings: [],
      corporateActions: [],
    },
    {
      name: "Apple Inc.",
      marketName: "AAPL",
      percentageChange: 1.2,
      priceChange: 20,
      marketCap: "989 BN",
      priceEarnings: 22.98,
      pb: 22.98,
      dividendYield: 1.6,
      price: 458,
      timeFrame: "1w",
      financials: [
        {
          date: "June 2020",
          revenue: "",
          netIncome: "",
          dilutedEPS: "",
          netProfitMargin: "",
          operatingIncome: "",
        },
      ],
      reports: ["2020", "2017"],
      boardMeetings: [],
      corporateActions: [],
    },
  ],
  stocks: [
    {
      name: "Apple Inc.",
      marketName: "AAPL",
      percentageChange: 1.2,
      priceChange: 20,
      price: 458,
      timeFrame: "1w",
      financials: [
        {
          date: "June 2020",
          revenue: "",
          netIncome: "",
          dilutedEPS: "",
          netProfitMargin: "",
          operatingIncome: "",
        },
      ],
      reports: ["2020", "2017"],
      boardMeetings: [],
      corporateActions: [],
    },
  ],
};

export const dashboardData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.SET_ACTIVE_STOCK:
      return { ...state, activeStock: action.payload };
    case constants.ADD_STOCK_TO_WATCHLIST:
      return { ...state, watchList: [...state.watchList, action.payload] };
    default:
      return state;
  }
};

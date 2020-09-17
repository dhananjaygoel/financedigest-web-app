import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { useSelector, useDispatch, useReducer } from "react-redux";
import { setActiveFinancialMonth } from "../store/dashboard/dashboardActions";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import { WatchListElement } from "components/WatchListElement";
import { PeerGroupElement } from "components/PeerGroupElement/PeerGroupElement";

const Dashboard = (props) => {
  const [bigChartData, setBgChartData] = useState("data1");
  const dashboardData = useSelector((state) => ({
    data: state,
  }));
  const dispatch = useDispatch();
  const selectedFinancialMonth = dashboardData.data.selectedFinancialMonth;
  const selectedFinancialYear = dashboardData.data.selectedFinancialYear;
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12" lg="8">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col
                    className="text-left"
                    sm="6"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <CardTitle>
                      {dashboardData.data.activeStock.marketName}
                    </CardTitle>
                    <h2>${dashboardData.data.activeStock.price}</h2>
                    <span style={{ fontSize: "0.9em", color: "#525f7f" }}>
                      +${dashboardData.data.activeStock.priceChange} (
                      {dashboardData.data.activeStock.percentageChange}%) Today
                    </span>
                    <span
                      style={{
                        fontSize: "0.9em",
                        marginBottom: "1.2em",
                        color: "#525f7f",
                      }}
                    >
                      +${dashboardData.data.activeStock.priceChange} (
                      {dashboardData.data.activeStock.percentageChange}%) After
                      hours
                    </span>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <input
                          defaultChecked
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-block d-sm-none">
                          1d
                        </span>

                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <input className="d-none" name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-block d-sm-none">
                          1w
                        </span>

                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <input className="d-none" name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-block d-sm-none">
                          3m
                        </span>

                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data4",
                        })}
                        onClick={() => setBgChartData("data4")}
                      >
                        <input className="d-none" name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-block d-sm-none">
                          1y
                        </span>

                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data5",
                        })}
                        onClick={() => setBgChartData("data5")}
                      >
                        <input className="d-none" name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-block d-sm-none">
                          3y
                        </span>
 
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data6",
                        })}
                        onClick={() => setBgChartData("data6")}
                      >
                        <input className="d-none" name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-block d-sm-none">
                          5y
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Financials
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  className="monthTab"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "0.4em",
                  }}
                >
                  {Object.keys(
                    dashboardData.data.activeStock.financials["2020"]
                  ).map((key) => {
                    return (
                      <span
                        style={{
                          borderBottom:
                            key == dashboardData.data.selectedFinancialMonth
                              ? "solid 3px #2dce88"
                              : "none",
                          width: "25%",
                          textAlign: "center",
                          paddingBottom: "7px",
                          cursor: "pointer",
                        }}
                        onClick={() => dispatch(setActiveFinancialMonth(key))}
                      >
                        {key}
                      </span>
                    );
                  })}
                </div>
                <Table className="tablesorter" responsive>
                  <thead>
                    <tr>
                      <td>{dashboardData.data.selectedCurrency}</td>
                      <td>
                        {`${dashboardData.data.selectedFinancialMonth} ${dashboardData.data.selectedFinancialYear}`}{" "}
                      </td>
                      <td>Y/Y</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Revenue</td>
                      <td>
                        {
                          dashboardData.data.activeStock.financials[
                            selectedFinancialYear
                          ][selectedFinancialMonth].revenue
                        }
                      </td>
                      <td>
                        {
                          dashboardData.data.activeStock.yearlyFinancials[
                            selectedFinancialYear
                          ].revenue
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Net Income</td>
                      <td>
                        {
                          dashboardData.data.activeStock.financials[
                            selectedFinancialYear
                          ][selectedFinancialMonth].netIncome
                        }
                      </td>
                      <td>
                        {
                          dashboardData.data.activeStock.yearlyFinancials[
                            selectedFinancialYear
                          ].netIncome
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Diluted EPS</td>
                      <td>
                        {
                          dashboardData.data.activeStock.financials[
                            selectedFinancialYear
                          ][selectedFinancialMonth].dilutedEPS
                        }
                      </td>
                      <td>
                        {
                          dashboardData.data.activeStock.yearlyFinancials[
                            selectedFinancialYear
                          ].dilutedEPS
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Net Profit Margin</td>
                      <td>
                        {
                          dashboardData.data.activeStock.financials[
                            selectedFinancialYear
                          ][selectedFinancialMonth].netProfitMargin
                        }
                      </td>
                      <td>
                        {
                          dashboardData.data.activeStock.yearlyFinancials[
                            selectedFinancialYear
                          ].netProfitMargin
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Operating Income</td>
                      <td>
                        {
                          dashboardData.data.activeStock.financials[
                            selectedFinancialYear
                          ][selectedFinancialMonth].operatingIncome
                        }
                      </td>
                      <td>
                        {
                          dashboardData.data.activeStock.yearlyFinancials[
                            selectedFinancialYear
                          ].operatingIncome
                        }
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Board Meetings
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <thead>
                      <tr>
                        <td>Purpose</td>
                        <td align="right">Meeting date</td>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardData.data.activeStock.boardMeetings.map((e) => {
                        return (
                          <tr>
                            <td>{e.purpose}</td>
                            <td align="right">{e.date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="4">
            <Row>
              <Col xs="12" lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h3">
                     Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        <tr>
                          <td>Market Cap</td>
                          <td>{dashboardData.data.activeStock.marketCap}</td>
                        </tr>
                        <tr>
                          <td>Price-Earnings ratio</td>
                          <td>
                            {dashboardData.data.activeStock.priceEarnings}
                          </td>
                        </tr>
                        <tr>
                          <td>P/B</td>
                          <td>{dashboardData.data.activeStock.pb}</td>
                        </tr>
                        <tr>
                          <td>Dividend Yield</td>
                          <td>
                            {dashboardData.data.activeStock.dividendYield}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h3">
                      Peer Group
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        {dashboardData.data.activeStock.peerGroups.map(
                          (group) => {
                            return (
                              <PeerGroupElement element={group} />
                            );
                          }
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h3">
                      Annual Reports
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        {dashboardData.data.activeStock.reports.map(
                          (report) => {
                            return (
                              <tr>
                                <td>{report}</td>
                                <td align="right">
                                  <a href="#" className="btn-link">
                                    <i className="fas fa-download"></i> download
                                  </a>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h3">
                       Dividends
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="table-full-width table-responsive">
                      <Table>
                        <thead>
                          <tr>
                            <td>Date</td>
                            <td align="right">Purpose</td>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData.data.activeStock.corporateActions.map(
                            (e) => {
                              return (
                                <tr>
                                  <td>{e.date}</td>
                                  <td align="right">{e.purpose}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;

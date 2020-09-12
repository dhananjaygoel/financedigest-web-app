import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

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

const Dashboard = (props) => {
  const [bigChartData, setBgChartData] = useState("data1");
  const dashboardData = useSelector((state) => ({
    data: state,
  }));
  const selectedFinancialMonth = dashboardData.data.selectedFinancialMonth;
  const selectedFinancialYear = dashboardData.data.selectedFinancialYear
  console.log(dashboardData);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12" lg="8">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle>
                      {dashboardData.data.activeStock.marketName}
                    </CardTitle>
                    <h2>${dashboardData.data.activeStock.price}</h2>
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
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          1d
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
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
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          1w
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
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
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          3m
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
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
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          1y
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
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
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          3y
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
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
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          5y
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
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
          </Col>
          <Col xs="12" lg="4">
            <Row>
              <Col xs="12" lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag='h3'>Statistics</CardTitle>
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
                    <CardTitle tag="h3">Peer Group</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        {dashboardData.data.activeStock.peerGroups.map(group => {
                          return (
                            <tr>
                              <td style={{border: 0}}>
                              <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: "0.7em"}}>
                                <div>
                                <img src={group.image} style={{height: '4em', width: '4em', borderRadius: '50%', marginRight: "3em"}}></img>
                                <span>{group.name}</span>
                                </div>
                                <span>{group.price}</span>
                              </div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">Financials</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead>
                    <tr>
                      <td>{dashboardData.data.selectedCurrency}</td>
                      <td>{`${dashboardData.data.selectedFinancialMonth} ${dashboardData.data.selectedFinancialYear}`} </td>
                      <td>Y/Y</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Revenue</td>
                      <td>{dashboardData.data.activeStock.financials[selectedFinancialYear][selectedFinancialMonth].revenue}</td>
                      <td>{dashboardData.data.activeStock.yearlyFinancials[selectedFinancialYear].revenue}</td>
                    </tr>
                    <tr>
                      <td>Net Income</td>
                      <td>{dashboardData.data.activeStock.financials[selectedFinancialYear][selectedFinancialMonth].netIncome}</td>
                      <td>{dashboardData.data.activeStock.yearlyFinancials[selectedFinancialYear].netIncome}</td>
                     </tr>
                    <tr>
                      <td>Diluted EPS</td>
                      <td>{dashboardData.data.activeStock.financials[selectedFinancialYear][selectedFinancialMonth].dilutedEPS}</td>
                      <td>{dashboardData.data.activeStock.yearlyFinancials[selectedFinancialYear].dilutedEPS}</td>
                    </tr>
                    <tr>
                      <td>Net Profit Margin</td>
                      <td>{dashboardData.data.activeStock.financials[selectedFinancialYear][selectedFinancialMonth].netProfitMargin}</td>
                      <td>{dashboardData.data.activeStock.yearlyFinancials[selectedFinancialYear].netProfitMargin}</td>
                    </tr>
                    <tr>
                      <td>Operating Income</td>
                      <td>{dashboardData.data.activeStock.financials[selectedFinancialYear][selectedFinancialMonth].operatingIncome}</td>
                      <td>{dashboardData.data.activeStock.yearlyFinancials[selectedFinancialYear].operatingIncome}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">Annual Reports</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  <tbody>
                  {dashboardData.data.activeStock.reports.map(report => {
                    return(<tr>
                      <td>{report}</td>
                      <td align="right">download</td>
                    </tr>)
                  })} 
                  </tbody>
                </Table>
 
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">Board Meetings</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody></tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">Corporate Actions</CardTitle>
                </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary"></thead>
                  <tbody></tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;

import { Table, TableBody, TableCell, TableContainer, Paper, TableRow } from '@material-ui/core';
import "./BuildLeaseTable.css";
import React from 'react';

const BuildLeaseTable = ({ data }) => {

  if (!data) return (<div className="container"></div>)
  if (data["type"] === "A1") {
    return (<div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
      <div className="container">
        <h4>Return Metrics</h4>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell componenet="td">Upfront Land Cost</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Upfront Land Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Working Capital During Project</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Working Capital During Project"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Total Fund Requirement</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Total Fund Requirement"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Investment</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Investment"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Surplus</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Surplus"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">MoC Unlevered</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["MoC Unlevered"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">XIRR Unlevered</TableCell>
                <TableCell componenet="td">{(parseFloat(data["Return Metrics"]["XIRR Unlevered"]) * 100).toFixed(2)}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Duration (Years)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Duration (Years)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Annual NOI at Exit (psft)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Annual NOI at Exit (psft)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Total Project Cost (psft)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Total Project Cost (psft)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Selling Price on Exit (psft)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Selling Price on Exit (psft)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Annual Yield on Cost</TableCell>
                <TableCell componenet="td">{(parseFloat(data["Return Metrics"]["Annual Yield on Cost"]) * 100).toFixed(2)}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Exit Yield</TableCell>
                <TableCell componenet="td">{(parseFloat(data["Return Metrics"]["Exit Yield"]) * 100).toFixed(2)}%</TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Unlevered Deal Multiple without Rental Earnings</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Unlevered Deal Multiple without Rental Earnings"]).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="container">
        <h4>Project Margin Analysis</h4>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Inflows</TableCell>
                <TableCell componenet="td">INR crore</TableCell>
                <TableCell componenet="td">INR psft</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Exit Value</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Exit Value"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Exit Value"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Rental Inflows</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Rental Inflows"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Rental Inflows"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Inflows</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Inflows"][0]).toFixed(2)}</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Inflows"][1]).toFixed(2)}</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Outflows</TableCell>
                <TableCell componenet="td">INR crore</TableCell>
                <TableCell componenet="td">INR psft</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Land Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Land Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Land Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Cons Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Cons Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Cons Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Brokerage Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Brokerage Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Brokerage Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Other Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Other Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Other Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Interest Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Interest Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Interest Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Project Cost (psft)</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Project Cost (psft)"][0]).toFixed(2)}</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Project Cost (psft)"][1]).toFixed(2)}</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Pre Tax Gross Margin</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Pre Tax Gross Margin"][0]).toFixed(2)}</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Pre Tax Gross Margin"][1]).toFixed(2)}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div >
        <h4>Sources & Uses till Completion</h4>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell component="td">Sources</TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Debt</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Debt"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Equity</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Equity"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Sources</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Sources & Uses till Completion"]["Total Sources"]).toFixed(2)}</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell component="td">Uses</TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Land Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Land Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Construction Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Construction Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Other Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Other Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Interest</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Interest"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Uses</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Sources & Uses till Completion"]["Total Uses"]).toFixed(2)}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>)
  }
  else if (data["type"] === "A2") {
    return (
      <div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
        <div className="container">
          <h4>Return Metrics</h4>
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="td">Upfront Land Cost</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["Upfront Land Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td">Revenue Share Received</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["Revenue Share Received"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td"></TableCell>
                  <TableCell component="td"></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="td">MoC Unlevered</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["MoC Unlevered"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="td">XIRR Unlevered</TableCell>
                  <TableCell component="td">{(parseFloat(data["Return Metrics"]["XIRR Unlevered"]) * 100).toFixed(2)}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td"></TableCell>
                  <TableCell component="td"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td">Duration (Years)</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["Duration (Years)"]).toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="container">
          <h4>Developer Margin Analysis</h4>
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Inflows</TableCell>
                  <TableCell component="th">INR crore</TableCell>
                  <TableCell component="th">INR psft</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Exit Value</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Exit Value"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Exit Value"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Rental Inflows</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Rental Inflows"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Rental Inflows"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Total Inflows</TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Inflows"][0]).toFixed(2)}</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Inflows"][1]).toFixed(2)}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Outflows</TableCell>
                  <TableCell component="th">INR crore</TableCell>
                  <TableCell component="th">INR psft</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">LO Share</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["LO Share"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["LO Share"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Cons Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Cons Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Cons Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Brokerage Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Brokerage Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Brokerage Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Other Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Other Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Other Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Interest Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Interest Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Interest Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><b>Total Project Cost (psft)</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Project Cost (psft)"][0]).toFixed(2)}</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Project Cost (psft)"][1]).toFixed(2)}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><b>Pre Tax Gross Margin</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Pre Tax Gross Margin"][0]).toFixed(2)}</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Pre Tax Gross Margin"][1]).toFixed(2)}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="container">
          <h4>Developer Sources & Uses till Completion</h4>
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Sources</TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Debt</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Debt"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Equity</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Equity"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Uses</TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Land Cost</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Land Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Construction Cost</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Construction Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Other Cost</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Other Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Interest</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Interest"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><b>Total Uses</b></TableCell>
                  <TableCell component="th"><b>{parseFloat(data["Developer Sources & Uses till Completion"]["Total Uses"]).toFixed(2)}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }
  else if (data["type"] === "B1") {
    return (<div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
      <div className="container">
        <h4>Return Metrics</h4>
        <TableContainer component={Paper} >
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell componenet="td">Upfront Land Cost (Derived)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Upfront Land Cost (Derived)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Additional Working Capital during Project</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Additional Working Capital during Project"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Total Fund Requirement</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Total Fund Requirement"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Investment</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Investment"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Surplus</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Surplus"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">MoC Unlevered</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["MoC Unlevered"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">XIRR Unlevered</TableCell>
                <TableCell componenet="td">{(parseFloat(data["Return Metrics"]["XIRR Unlevered"]) * 100).toFixed(2)}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Duration (Years)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Duration (Years)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td"></TableCell>
                <TableCell componenet="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Annual NOI at Exit (psft)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Annual NOI at Exit (psft)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Total Project Cost (psft)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Total Project Cost (psft)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Selling Price on Exit (psft)</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Selling Price on Exit (psft)"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Annual Yield on Cost</TableCell>
                <TableCell componenet="td">{(parseFloat(data["Return Metrics"]["Annual Yield on Cost"]) * 100).toFixed(2)}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell componenet="td">Exit Yield</TableCell>
                <TableCell componenet="td">{(parseFloat(data["Return Metrics"]["Exit Yield"]) * 100).toFixed(2)}%</TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Unlevered Deal Multiple without Rental Earnings</TableCell>
                <TableCell componenet="td">{parseFloat(data["Return Metrics"]["Unlevered Deal Multiple without Rental Earnings"]).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="container">
        <h4>Project Margin Analysis</h4>
        <TableContainer component={Paper} >
          <Table aria-label="simple table">
            <TableBody>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Inflows</TableCell>
                <TableCell componenet="td">INR crore</TableCell>
                <TableCell componenet="td">INR psft</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Exit Value</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Exit Value"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Exit Value"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Rental Inflows</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Rental Inflows"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Rental Inflows"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Inflows</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Inflows"][0]).toFixed(2)}</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Inflows"][1]).toFixed(2)}</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell componenet="td">Outflows</TableCell>
                <TableCell componenet="td">INR crore</TableCell>
                <TableCell componenet="td">INR psft</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Land Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Land Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Land Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Cons Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Cons Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Cons Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Brokerage Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Brokerage Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Brokerage Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Other Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Other Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Other Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Interest Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Interest Cost"][0]).toFixed(2)}</TableCell>
                <TableCell component="td">{parseFloat(data["Project Margin Analysis"]["Interest Cost"][1]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Project Cost (psft)</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Project Cost (psft)"][0]).toFixed(2)}</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Total Project Cost (psft)"][1]).toFixed(2)}</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Pre Tax Gross Margin</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Pre Tax Gross Margin"][0]).toFixed(2)}</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Project Margin Analysis"]["Pre Tax Gross Margin"][1]).toFixed(2)}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="container">
        <h4>Sources & Uses till Completion</h4>
        <TableContainer component={Paper} >
          <Table aria-label="simple table">
            <TableBody>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell component="td">Sources</TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Debt</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Debt"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Equity</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Equity"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Sources</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Sources & Uses till Completion"]["Total Sources"]).toFixed(2)}</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"></TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow style={{ background: "#f1f1f1" }}>
                <TableCell component="td">Uses</TableCell>
                <TableCell component="td"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Land Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Land Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Construction Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Construction Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Other Cost</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Other Cost"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Interest</TableCell>
                <TableCell component="td">{parseFloat(data["Sources & Uses till Completion"]["Interest"]).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td"><b>Total Uses</b></TableCell>
                <TableCell component="td"><b>{parseFloat(data["Sources & Uses till Completion"]["Total Uses"]).toFixed(2)}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>)
  } else if (data["type"] === "B2") {
    return (
      <div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
        <div className="container">
          <h4>Return Metrics</h4>
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="td">Upfront Land Cost</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["Upfront Land Cost (Derived)"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td">Revenue Share Received</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["Revenue Share Received"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td"></TableCell>
                  <TableCell component="td"></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="td">MoC Unlevered</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["MoC Unlevered"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="td">XIRR Unlevered</TableCell>
                  <TableCell component="td">{(parseFloat(data["Return Metrics"]["XIRR Unlevered"]) * 100).toFixed(2)}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td"></TableCell>
                  <TableCell component="td"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td">Duration (Years)</TableCell>
                  <TableCell component="td">{parseFloat(data["Return Metrics"]["Duration (Years)"]).toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="container">
          <h4>Developer Margin Analysis</h4>
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Inflows</TableCell>
                  <TableCell component="th">INR crore</TableCell>
                  <TableCell component="th">INR psft</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Exit Value</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Exit Value"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Exit Value"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Rental Inflows</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Rental Inflows"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Rental Inflows"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Total Inflows</TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Inflows"][0]).toFixed(2)}</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Inflows"][1]).toFixed(2)}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Outflows</TableCell>
                  <TableCell component="th">INR crore</TableCell>
                  <TableCell component="th">INR psft</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">LO Share</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["LO Share"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["LO Share"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Cons Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Cons Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Cons Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Brokerage Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Brokerage Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Brokerage Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Other Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Other Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Other Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Interest Cost</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Interest Cost"][0]).toFixed(2)}</TableCell>
                  <TableCell component="th">{parseInt(data["Developer Margin Analysis"]["Interest Cost"][1]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><b>Total Project Cost (psft)</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Project Cost (psft)"][0]).toFixed(2)}</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Total Project Cost (psft)"][1]).toFixed(2)}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><b>Pre Tax Gross Margin</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Pre Tax Gross Margin"][0]).toFixed(2)}</b></TableCell>
                  <TableCell component="th"><b>{parseInt(data["Developer Margin Analysis"]["Pre Tax Gross Margin"][1]).toFixed(2)}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="container">
          <h4>Developer Sources & Uses till Completion</h4>
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Sources</TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Debt</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Debt"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Equity</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Equity"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell component="th">Uses</TableCell>
                  <TableCell component="th"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Land Cost</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Land Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Construction Cost</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Construction Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Other Cost</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Other Cost"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Interest</TableCell>
                  <TableCell component="th">{parseFloat(data["Developer Sources & Uses till Completion"]["Interest"]).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><b>Total Uses</b></TableCell>
                  <TableCell component="th"><b>{parseFloat(data["Developer Sources & Uses till Completion"]["Total Uses"]).toFixed(2)}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }

}

export default BuildLeaseTable;
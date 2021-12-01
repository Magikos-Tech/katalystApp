import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React from 'react'

const BuySellTable = ({ data }) => {

  if (!data) return <div></div>;
  if (data["Project Level P/L"] != undefined && data["Return Metrics"]["Upfront Land Cost"] != undefined) {
    return (
      <div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
        <div>
          <h4>Return Metrics</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Upfront Land Cost</TableCell>
                  <TableCell>{data["Return Metrics"]["Upfront Land Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Working Capital During Project</TableCell>
                  <TableCell>{data["Return Metrics"]["Working Capital During Project"]}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Total Fund Requirement</TableCell>
                  <TableCell>{data["Return Metrics"]["Total Fund Requirement"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>{data["Return Metrics"]["Investment"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Surplus</TableCell>
                  <TableCell>{data["Return Metrics"]["Surplus"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>MoC Unlevered</TableCell>
                  <TableCell>{data["Return Metrics"]["MoC Unlevered"]}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>XIRR Unlevered</TableCell>
                  <TableCell>{data["Return Metrics"]["XIRR Unlevered"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration (Years)</TableCell>
                  <TableCell>{data["Return Metrics"]["Duration (Years)"]}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Project Level P/L</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Inflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residential</TableCell>
                  <TableCell>{data["Project Level P/L"]["Residential"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Commercial</TableCell>
                  <TableCell>{data["Project Level P/L"]["Commercial"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Inflows</b></TableCell>
                  <TableCell><b>{data["Project Level P/L"]["Total Inflows"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Outflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Land Cost</TableCell>
                  <TableCell>{data["Project Level P/L"]["Land Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{data["Project Level P/L"]["Construction Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{data["Project Level P/L"]["Brokerage"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{data["Project Level P/L"]["Other Costs"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Outflows</b></TableCell>
                  <TableCell><b>{data["Project Level P/L"]["Total Outflows"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Pre Tax Profit</b></TableCell>
                  <TableCell><b>{data["Project Level P/L"]["Pre Tax Profit"]}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Sources & Uses </h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Sources</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>{data["Sources & Uses "]["Investment"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Collections</TableCell>
                  <TableCell>{data["Sources & Uses "]["Collections"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Sources</b></TableCell>
                  <TableCell><b>{data["Sources & Uses "]["Total Sources"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Uses</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Land Cost</TableCell>
                  <TableCell>{data["Sources & Uses "]["Land Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{data["Sources & Uses "]["Construction Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{data["Sources & Uses "]["Brokerage"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{data["Sources & Uses "]["Other Costs"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Uses</b></TableCell>
                  <TableCell><b>{data["Sources & Uses "]["Total Uses"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Cash Surplus</b></TableCell>
                  <TableCell><b>{data["Sources & Uses "]["Cash Surplus"]}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>);
  }
  else if (data["Developer's Project Level P/L"] != undefined && data["Return Metrics"]["Upfront Land Cost"] != undefined) {
    return (
      <div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}} className="build-lease-table">
        <div>
          <h4>Return Metrics</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Upfront Land Cost</TableCell>
                  <TableCell>{data["Return Metrics"]["Upfront Land Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Revenue Share Received</TableCell>
                  <TableCell>{data["Return Metrics"]["Revenue Share Received"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>MoC Unlevered</TableCell>
                  <TableCell>{data["Return Metrics"]["MoC Unlevered"]}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>XIRR Unlevered</TableCell>
                  <TableCell>{data["Return Metrics"]["XIRR Unlevered"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration (Years)</TableCell>
                  <TableCell>{data["Return Metrics"]["Duration (Years)"]}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Developer&apos;s Project Level P/L</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Inflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residential</TableCell>
                  <TableCell>{data["Developer's Project Level P/L"]["Residential"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Commercial</TableCell>
                  <TableCell>{data["Developer's Project Level P/L"]["Commercial"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Inflows</b></TableCell>
                  <TableCell><b>{data["Developer's Project Level P/L"]["Total Inflows"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Outflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LO Share</TableCell>
                  <TableCell>{data["Developer's Project Level P/L"]["LO Share"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{data["Developer's Project Level P/L"]["Construction Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{data["Developer's Project Level P/L"]["Brokerage"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{data["Developer's Project Level P/L"]["Other Costs"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Outflows</b></TableCell>
                  <TableCell><b>{data["Developer's Project Level P/L"]["Total Outflows"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Pre Tax Profit</b></TableCell>
                  <TableCell><b>{data["Developer's Project Level P/L"]["Pre Tax Profit"]}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Developer&apos;s Sources & Uses  </h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Sources</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Investment"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Collections</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Collections"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Sources</b></TableCell>
                  <TableCell><b>{(data["Developer's Sources & Uses "]["Total Sources"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Uses</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LO Share</TableCell>
                  <TableCell>{data["Developer's Sources & Uses "]["LO Share"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Construction Cost"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Brokerage"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Other Costs"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Uses</b></TableCell>
                  <TableCell><b>{(data["Developer's Sources & Uses "]["Total Uses"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Cash Surplus</b></TableCell>
                  <TableCell><b>{(data["Developer's Sources & Uses "]["Cash Surplus"])}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  } else if (data["Project Level P/L"] != undefined && data["Return Metrics"]["Upfront Land Cost (Derived)"] != undefined) {
    return (
      <div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
        <div>
          <h4>Return Metrics</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Upfront Land Cost (Derived)</TableCell>
                  <TableCell>{data["Return Metrics"]["Upfront Land Cost (Derived)"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Additional Working Capital during Project</TableCell>
                  <TableCell>{(data["Return Metrics"]["Additional Working Capital during Project"])}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Total Fund Requirement</TableCell>
                  <TableCell>{(data["Return Metrics"]["Total Fund Requirement"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>{(data["Return Metrics"]["Investment"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Surplus</TableCell>
                  <TableCell>{data["Return Metrics"]["Surplus"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>MoC Unlevered</TableCell>
                  <TableCell>{data["Return Metrics"]["MoC Unlevered"]}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>XIRR Unlevered</TableCell>
                  <TableCell>{(data["Return Metrics"]["XIRR Unlevered"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration (Years)</TableCell>
                  <TableCell>{(data["Return Metrics"]["Duration (Years)"])}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Project Level P/L</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Inflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residential</TableCell>
                  <TableCell>{(data["Project Level P/L"]["Residential"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Commercial</TableCell>
                  <TableCell>{(data["Project Level P/L"]["Commercial"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Inflows</b></TableCell>
                  <TableCell><b>{(data["Project Level P/L"]["Total Inflows"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Outflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Land Cost</TableCell>
                  <TableCell>{data["Project Level P/L"]["Land Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{(data["Project Level P/L"]["Construction Cost"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{(data["Project Level P/L"]["Brokerage"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{(data["Project Level P/L"]["Other Costs"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Outflows</b></TableCell>
                  <TableCell><b>{data["Project Level P/L"]["Total Outflows"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Pre Tax Profit</b></TableCell>
                  <TableCell><b>{data["Project Level P/L"]["Pre Tax Profit"]}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Sources & Uses </h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Sources</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>{(data[""]["Investment"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Collections</TableCell>
                  <TableCell>{(data[""]["Collections"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Sources</b></TableCell>
                  <TableCell><b>{(data[""]["Total Sources"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Uses</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Land Cost</TableCell>
                  <TableCell>{data[""]["Land Cost"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{(data[""]["Construction Cost"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{(data[""]["Brokerage"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{(data[""]["Other Costs"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Uses</b></TableCell>
                  <TableCell><b>{(data[""]["Total Uses"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Cash Surplus</b></TableCell>
                  <TableCell><b>{data[""]["Cash Surplus"]}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  } else if (data["Developer's Project Level P/L"] != undefined && data["Return Metrics"]["Upfront Land Cost (Derived)"] != undefined) {
    return (
      <div style={{ background: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="build-lease-table">
        <div>
          <h4>Return Metrics</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Upfront Land Cost (Derived)</TableCell>
                  <TableCell>{(data["Return Metrics"]["Upfront Land Cost (Derived)"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Revenue Share Received</TableCell>
                  <TableCell>{(data["Return Metrics"]["Revenue Share Received"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>MoC Unlevered</TableCell>
                  <TableCell>{(data["Return Metrics"]["MoC Unlevered"])}</TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>XIRR Unlevered</TableCell>
                  <TableCell>{(data["Return Metrics"]["XIRR Unlevered"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration (Years)</TableCell>
                  <TableCell>{(data["Return Metrics"]["Duration (Years)"])}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Developer&apos;s Project Level P/L</h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Inflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residential</TableCell>
                  <TableCell>{(data["Developer's Project Level P/L"]["Residential"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Commercial</TableCell>
                  <TableCell>{(data["Developer's Project Level P/L"]["Commercial"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Inflows</b></TableCell>
                  <TableCell><b>{(data["Developer's Project Level P/L"]["Total Inflows"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Outflows</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LO Share</TableCell>
                  <TableCell>{(data["Developer's Project Level P/L"]["LO Share"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{(data["Developer's Project Level P/L"]["Construction Cost"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{(data["Developer's Project Level P/L"]["Brokerage"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{(data["Developer's Project Level P/L"]["Other Costs"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Outflows</b></TableCell>
                  <TableCell><b>{data["Developer's Project Level P/L"]["Total Outflows"]}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Pre Tax Profit</b></TableCell>
                  <TableCell><b>{data["Developer's Project Level P/L"]["Pre Tax Profit"]}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h4>Developer&apos;s Sources & Uses  </h4>
          <TableContainer component={Paper} className="container">
            <Table>
              <TableBody>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Sources</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Investment"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Collections</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Collections"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Sources</b></TableCell>
                  <TableCell><b>{(data["Developer's Sources & Uses "]["Total Sources"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow style={{ background: "#f1f1f1" }}>
                  <TableCell>Uses</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LO Share</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["LO Share"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Construction Cost</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Construction Cost"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brokerage</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Brokerage"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other Costs</TableCell>
                  <TableCell>{(data["Developer's Sources & Uses "]["Other Costs"])}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Total Uses</b></TableCell>
                  <TableCell><b>{(data["Developer's Sources & Uses "]["Total Uses"])}</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Cash Surplus</b></TableCell>
                  <TableCell><b>{(data["Developer's Sources & Uses "]["Cash Surplus"])}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }
}

export default BuySellTable

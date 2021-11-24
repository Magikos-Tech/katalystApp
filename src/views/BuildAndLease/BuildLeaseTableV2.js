import { Table, TableBody, TableCell, TableContainer, Paper } from '@material-ui/core'
import React from 'react'

const BuildLeaseTableV2 = () => {
  const data = {
    "Return Metrics": {
      "Upfront Land Cost": 100000,
      "Working Capital During Project": 20.001487196117523,
      "Total Fund Requirement": 100020.00148719612,
      "Investment": 100020.00148719612,
      "Surplus": 403649996959536.06,
      "MoC Unlevered": 4035692771.02249,
      "XIRR Unlevered": 8.192824262667868,
      "Duration (Years)": 10.5,
      "Annual NOI at Exit (psft)": 0,
      "Total Project Cost (psft)": 100020005509.89516,
      "Selling Price on Exit (psft)": 0,
      "Annual Yield on Cost": 0,
      "Exit Yield": 0.1,
      "Unlevered Deal Multiple without Rental Earnings": 0
    },
    "Project Margin Analysis": {
      "Inflows": [
        "INR crore",
        "INR psft"
      ],
      "Exit Value": [
        0,
        0
      ],
      "Rental Inflows": [
        403649996959536.06,
        403649996959536050000
      ],
      "Total Inflows": [
        403649996959536.06,
        403649996959536050000
      ],
      "Outflows": [
        "INR crore",
        "INR psft"
      ],
      "Land Cost": [
        100000,
        100000000000
      ],
      "Cons Cost": [
        0.0015937424601000006,
        1593.7424601000007
      ],
      "Brokerage Cost": [
        0.00001,
        10.000000000000002
      ],
      "Other Cost": [
        20.000599999999977,
        20000599.999999978
      ],
      "Interest Cost": [
        0.003306152697670745,
        3306.152697670745
      ],
      "Total Project Cost (psft)": [
        100020.00550989516,
        100020005509.89516
      ],
      "Pre Tax Gross Margin": [
        403649996859516.06,
        403649996859516060000
      ]
    },
    "Sources & Uses till Completion": {
      "Sources": "",
      "Debt": 0.00015937424601000007,
      "Equity": 100020.00144921176,
      "Total Sources": 100020.00160858601,
      "Uses": "",
      "Land Cost": 100000,
      "Construction Cost": 0.0015937424601000006,
      "Other Cost": 20,
      "Interest": 0.000014843561502500004,
      "Total Uses": 100020.00160858603
    }
  }

  data
  return (

    <div style={{ background: "white" }}>
      <h4>Return Metrics</h4>
      <TableContainer componenet={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableCell componenet="th">Upfront Land Cost</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Upfront Land Cost"]}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Working Capital During Project</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Working Capital During Project"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Total Fund Requirement</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Total Fund Requirement"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Investment</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Investment"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Surplus</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Surplus"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">MoC Unlevered</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["MoC Unlevered"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">XIRR Unlevered</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["XIRR Unlevered"]}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Duration (Years)</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Duration (Years)"]}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Annual NOI at Exit (psft)</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Annual NOI at Exit (psft)"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Total Project Cost (psft)</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Total Project Cost (psft)"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Selling Price on Exit (psft)</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Selling Price on Exit (psft)"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Annual Yield on Cost</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Annual Yield on Cost"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Exit Yield</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Exit Yield"].toFixed(2)}</TableCell>
          </TableBody>
          <TableBody>
            <TableCell componenet="th">Unlevered Deal Multiple without Rental Earnings</TableCell>
            <TableCell componenet="th">{data["Return Metrics"]["Unlevered Deal Multiple without Rental Earnings"].toFixed(2)}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BuildLeaseTableV2

import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table.js';
import style from 'assets/jss/material-kit-react/views/componentsSections/contentAreas.js';
import { makeStyles } from '@material-ui/core/styles';
// import { CropLandscapeOutlined } from '@material-ui/icons';

const useStyles = makeStyles(style);
useStyles
Table
const BuildLeaseTable = ({ data }) => {
  if (!data) return <div></div>;
  const keyNames = Object.keys(data);
  const table1 = data[keyNames[0]];
  //const table2 = data[keyNames[1]];
  const table3 = data[keyNames[2]];
  //const table2_1 = data[keyNames[1]];

  Object.keys(table1).forEach((key) => {
    if (key == 'XIRR Unlevered') console.log('yatra');
    table1[key] =
      // typeof table1[key] == 'number' ? (table1[key] * 1).toFixed(2) : '';
      key == 'XIRR Unlevered'
        ? (Number(table1[key]) * 100).toFixed(2)
        : Number(table1[key] * 1).toFixed(2);
  });

  let table2cr = {}, table2psft = {};
  for (let props in data["Project Margin Analysis"]) {
    let value = data["Project Margin Analysis"][props];
    table2cr[props] = value[0];
    table2psft[props] = value[1];
    if (parseFloat(value[0])) {
      table2cr[props] = value[0].toFixed(2);
      table2psft[props] = value[1].toFixed(2);
    }
  }

  for (let props in data["Developer Margin Analysis"]) {
    let value = data["Developer Margin Analysis"][props];
    table2cr[props] = value[0];
    table2psft[props] = value[1];
    if (parseFloat(value[0])) {
      table2cr[props] = value[0].toFixed(2);
      table2psft[props] = value[1].toFixed(2);
    }
  }


  Object.keys(table3).forEach((key) => {
    table3[key] =
      // typeof table3[key] == 'number' ? (table3[key] * 1).toFixed(2) : '';
      Number(table3[key] * 1).toFixed(2);
  });

  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        flexWrap: "wrap",
        justifyContent: 'space-around',
      }}
    >
      <Table
        style={{ margin: "1rem" }}
        striped
        tableHead={[keyNames[0], 'Result']}
        tableData={Object.entries(table1)}
        customCellClasses={[
          classes.textCenter,
          classes.padding0,
          classes.textRight,
          classes.textRight,
        ]}
        customClassesForCells={[0, 1, 5, 6]}
        customHeadCellClasses={[
          classes.textCenter,
          classes.textRight,
          classes.textRight,
        ]}
        customHeadClassesForCells={[0, 5, 6]}
      />
      <Table
        striped
        tableHead={[keyNames[1], 'Result']}
        tableData={Object.entries(table2cr)}
        customCellClasses={[
          classes.textCenter,
          classes.padding0,
          classes.textRight,
          classes.textRight,
        ]}
        customClassesForCells={[0, 1, 5, 6]}
        customHeadCellClasses={[
          classes.textCenter,
          classes.textRight,
          classes.textRight,
        ]}
        customHeadClassesForCells={[0, 5, 6]}
      />
      <Table
        striped
        tableHead={[keyNames[1], 'Result']}
        tableData={Object.entries(table2psft)}
        customCellClasses={[
          classes.textCenter,
          classes.padding0,
          classes.textRight,
          classes.textRight,
        ]}
        customClassesForCells={[0, 1, 5, 6]}
        customHeadCellClasses={[
          classes.textCenter,
          classes.textRight,
          classes.textRight,
        ]}
        customHeadClassesForCells={[0, 5, 6]}
      />
      <Table
        style={{ margin: "1rem" }}
        striped
        tableHead={[keyNames[2], 'Result']}
        tableData={Object.entries(table3)}
        customCellClasses={[
          classes.textCenter,
          classes.padding0,
          classes.textRight,
          classes.textRight,
        ]}
        customClassesForCells={[0, 1, 5, 6]}
        customHeadCellClasses={[
          classes.textCenter,
          classes.textRight,
          classes.textRight,
        ]}
        customHeadClassesForCells={[0, 5, 6]}
      />
    </div>
  );
}
BuildLeaseTable.propTypes = {
  data: PropTypes.any,
};


export default BuildLeaseTable;

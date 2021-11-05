import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table.js';
import style from 'assets/jss/material-kit-react/views/componentsSections/contentAreas.js';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(style);
const TableDisp = ({ data }) => {
  console.warn('data', data);

  if (!data) return <div></div>;

  const keyNames = Object.keys(data);
  const table1 = data[keyNames[0]];
  const table2 = data[keyNames[1]];
  const table3 = data[keyNames[2]];

  console.warn(table1, '\n', table2, '\n', table3);
  const classes = useStyles();
  return (
    <div style={{display: 'flex', alignItems: 'start', justifyContent:'space-between'}}>
    <Table
      striped
      tableHead={[keyNames[0],'Result']}
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
      tableHead={[keyNames[1],'Result']}
      tableData={Object.entries(table2)}
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
      tableHead={[keyNames[2],'Result']}
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
};

TableDisp.propTypes = {
  data: PropTypes.any,
};

export default TableDisp;

// return (
//   <div>
//     <table border='1'>
//       <tbody>
//         {Object.entries(table1).map((el, ind) => {
//           return (
//             <tr key={`tr-${ind}`}>
//               <td>{el[0]}</td>

//               <td>{el[1]}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>

//     <table border='1'>
//       <tbody>
//         {Object.entries(table2).map((el, ind) => {
//           return (
//             <tr key={`tr-${ind}`}>
//               <td>{el[0]}</td>

//               <td>{el[1]}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>

//     <table border='1'>
//       <tbody>
//         {Object.entries(table3).map((el, ind) => {
//           return (
//             <tr key={`tr-${ind}`}>
//               <td>{el[0]}</td>

//               <td>{el[1]}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   </div>
// );

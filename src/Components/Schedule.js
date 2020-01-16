import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead'; 
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#0288d1',
    color: theme.palette.common.white,
    borderColor: '#ffffff',
  },
  body: {
    fontSize: 14,
    backgroundColor: '#0288d133',
    color: theme.palette.common.black,
    borderColor: '#ffffff',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '',
    },
  },
}))(TableRow);

function createData(time, event1, event2, event3, event4, event5, special, special2, special3) {
  return { time, event1, event2, event3, event4, event5, special, special2, special3 };
}

const rows = [
  createData('10:00-11:00', '', '', 'Bas Geleijns: Automotive Driving', '', ''),
  createData('11:30-12:30', 'Capgemini: Cybersecurity and GDPR', 'De Volksbank: NVGANDHI', 'Tim Lommob: Managing cloud security', 'JW player: The story behind the worlds biggest open video platform', ''),
  createData('13:00-14:00', 'Lunch', 'Lunch', 'Lunch', 'Lunch', '', '#0288d160', '#0288d160'),
  createData('14:00-15:30', 'Prodrive: Basic algorithms for game agents', 'Sogeti: Infinite Machine Creativity', 'Casper Schellekens: Wireless Hacking', 'Rens van der Vorst: Slave or master of your technology? (14:45 - 15:30)  ', 'ICT In Practice', '', '', ''),
  createData('15:30-16:30', 'Prodrive: Cloud', 'Sioux: An Introduction to 5G', 'Fujitsu: Closing Back Doors', 'Sioux: Holistic System Engineering', ''),
  createData('16:30-17:30', 'ICT Talent Awards', 'Dmitrii Orlov: How To Git It', 'Dmitrii Orlov: DevOps', 'Roxana Paval: How To Scrum', ''),
  createData('17:45-20:00', '', '', 'After Party', 'After Party', '', '#0288d160')
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Schedule() {
  const classes = useStyles();

  return (
    <div className='schedule'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" colSpan={1}></StyledTableCell>
              <StyledTableCell align="center" colSpan={2}>5 February</StyledTableCell>
              <StyledTableCell align="center" colSpan={2}>6 February</StyledTableCell>
              <StyledTableCell align="center" colSpan={1}>7 February</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">Time Slot</StyledTableCell>
              <StyledTableCell align="center">Common Area</StyledTableCell>
              <StyledTableCell align="center">Room 2.40</StyledTableCell>
              <StyledTableCell align="center">Common Area</StyledTableCell>
              <StyledTableCell align="center">Room 2.40</StyledTableCell>
              <StyledTableCell align="center">TQ Eindhoven</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.time}>
                <StyledTableCell align="center" component="th" scope="row" style={{ backgroundColor: '#0288d1', color: 'white', borderColor: '#ffffff', fontSize: 16, }}>
                  {row.time}
                </StyledTableCell>
                <StyledTableCell style={{ backgroundColor: row.special2 }} align="center">{row.event1}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: row.special2 }} align="center">{row.event2}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: row.special }} align="center">{row.event3}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: row.special }} align="center">{row.event4}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#ffffff', }} align="center">{row.event5}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
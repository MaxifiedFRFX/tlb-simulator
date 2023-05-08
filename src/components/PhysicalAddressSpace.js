import { Box, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import MuiToggleButton from "@mui/material/ToggleButton";
import Paper from '@mui/material/Paper';
import { useEffect, useRef } from 'react';

/* This contains the Physical Address Space on a Table.
*/
function PhysicalAddressSpace(params) {
    const { pas, vpn } = params;
    const scrollable = useRef(null);

    useEffect(() => {
        if (vpn !== null) {
            document.getElementById("row" + vpn).classList.add('pasSelected');
            document.getElementById('row' + vpn).scrollIntoView();

            return function cleanup() {
                document.getElementById("row" + vpn).classList.remove('pasSelected');
            }
        }
    }, [vpn])

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Typography>Physical Address Space:</Typography>
            <Paper sx={{ height: '90vh', overflow: 'scroll' }} ref={scrollable}>
                <TableContainer sx={{ maxHeight: '90vh' }}>
                    <Table sx={{ minWidth: "", height: "5vh" }} aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>PFN</TableCell>
                                <TableCell>Implicit VPN</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pas.map((page) => (
                                <TableRow
                                    key={page.pfn}
                                    sx={{ backgroundcolor: 'blue' }}
                                    id={"row" + page.implicitVpn}
                                >
                                    <TableCell>{page.pfn}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {page.implicitVpn}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default PhysicalAddressSpace;

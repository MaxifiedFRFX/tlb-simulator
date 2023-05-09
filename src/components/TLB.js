import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

export default function BasicTable(params) {
    const { tlb, hits } = params;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography> TLB (Random Replacement Policy): </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Explicit VPN</TableCell>
                            <TableCell>PFN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tlb.slice(0).reverse().map((tlbEntry) => (
                            <TableRow
                                key={tlbEntry.explicitVpn}
                            >
                                <TableCell component="th" scope="row">
                                    {tlbEntry.explicitVpn}
                                </TableCell>
                                <TableCell>{tlbEntry.pfn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography id='MissOrHit' sx={{ fontSize: "4rem" }}></Typography>
            <Typography sx={{ fontSize: "4rem" }} >Hits: { hits } </Typography>
        </Box>
    );
}
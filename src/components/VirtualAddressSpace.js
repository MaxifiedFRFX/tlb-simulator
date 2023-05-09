import { Box, styled, ToggleButtonGroup, Typography } from '@mui/material';
import MuiToggleButton from "@mui/material/ToggleButton";

/* This contains the Virtual Address Space on a grid.
*/
function VirtualAddressSpace(params) {
    const { virtualAddressSpace, vpn, setVpn, setHit } = params;

    const ToggleButton2 = styled(MuiToggleButton)(({ theme }) => ({
        color: "white",
        height: "10vh",
        width: "8vh",
        fontSize: "calc(5px + 1vmin)",
        backgroundColor: '#1A2027',
        textAlign: 'center',
        padding: theme.spacing(1),
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: 'darkblue'
        }
    }));

    const handlePage = (event, newVpn) => {
        if (newVpn !== null) {
            setVpn(+newVpn);
            document.getElementById("virtualAddressInput").value = newVpn;
        } else {
            setHit(prevHit => !prevHit);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography>Virtual Address Space:</Typography>
            <ToggleButtonGroup
                value={vpn}
                exclusive
                onChange={handlePage}
                sx={{
                    flexWrap: "wrap",
                    width: "80vh"
                }}
                id="VirtualAddressSpace"
            >
                { /* This is where the Virtual Address Space is mapped across the grid. */}
                {virtualAddressSpace.map(page => <ToggleButton2 key={page.page} value={page.page}> Page: {page.page} </ToggleButton2>)}
            </ToggleButtonGroup>
        </Box>
    );
}

export default VirtualAddressSpace;

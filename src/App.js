import { useEffect, useState } from "react";
import './App.css';
import VirtualAddressSpace from './components/VirtualAddressSpace';
import { ThemeProvider, createTheme } from "@mui/material";
import VirtualAddress from "./components/VirtualAddress";
import TLB from "./components/TLB";
import PhysicalAddressSpace from "./components/PhysicalAddressSpace";
import VirtualAddressSpaceSize from "./components/VirtualAddressSpaceSize";
import PhysicalAddressSpaceSize from "./components/PhysicalAddressSpaceSize";

/* This is the contains all of the app. It includes and incorporates all components.
* You will need to install yarn to run the program. You use the command "yarn start"
* to run the program. It should start on port 3000.
*/
function App() {
    const [virtualAddressSpace, setVirtualAddressSpace] = useState([
        { page: 0 },
        { page: 1 },
        { page: 2 },
        { page: 3 },
        { page: 4 },
        { page: 5 },
        { page: 6 },
        { page: 7 },
        { page: 8 },
        { page: 9 },
        { page: 10 },
        { page: 11 },
        { page: 12 },
        { page: 13 },
        { page: 14 },
        { page: 15 },
    ]);
    const [tlb, setTlb] = useState([]);
    const [hits, setHits] = useState(0);
    const [hit, setHit] = useState(false);
    const [vpn, setVpn] = useState(null);
    const [pas, setPas] = useState([
        { pfn: 0, implicitVpn: null, value: "" },
        { pfn: 1, implicitVpn: null, value: "" },
        { pfn: 2, implicitVpn: 3, value: "" },
        { pfn: 3, implicitVpn: 5, value: "" },
        { pfn: 4, implicitVpn: 4, value: "" },
        { pfn: 5, implicitVpn: 0, value: "" },
        { pfn: 6, implicitVpn: 14, value: "" },
        { pfn: 7, implicitVpn: null, value: "" },
        { pfn: 8, implicitVpn: 9, value: "" },
        { pfn: 9, implicitVpn: null, value: "" },
        { pfn: 10, implicitVpn: 8, value: "" },
        { pfn: 11, implicitVpn: null, value: "" },
        { pfn: 12, implicitVpn: null, value: "" },
        { pfn: 13, implicitVpn: 11, value: "" },
        { pfn: 14, implicitVpn: null, value: "" },
        { pfn: 15, implicitVpn: 2, value: "" },
        { pfn: 16, implicitVpn: null, value: "" },
        { pfn: 17, implicitVpn: 10, value: "" },
        { pfn: 18, implicitVpn: null, value: "" },
        { pfn: 19, implicitVpn: 6, value: "" },
        { pfn: 20, implicitVpn: null, value: "" },
        { pfn: 21, implicitVpn: null, value: "" },
        { pfn: 22, implicitVpn: 15, value: "" },
        { pfn: 23, implicitVpn: null, value: "" },
        { pfn: 24, implicitVpn: 1, value: "" },
        { pfn: 25, implicitVpn: 12, value: "" },
        { pfn: 26, implicitVpn: null, value: "" },
        { pfn: 27, implicitVpn: null, value: "" },
        { pfn: 28, implicitVpn: 13, value: "" },
        { pfn: 29, implicitVpn: null, value: "" },
        { pfn: 30, implicitVpn: null, value: "" },
        { pfn: 31, implicitVpn: 7, value: "" },
    ])
    const [vasSize, setVasSize] = useState(16);
    const [pasSize, setPasSize] = useState(32);

    const changePas = () => {
        if (pasSize !== null) {
            let vpns = [];
            for (let i = 0; i < vasSize; i++) {
                vpns.push(i);
            }
            let newPas = [];
            for (let i = 0; i < pasSize; i++) {
                newPas.push({ pfn: i, implicitVpn: null })
            }
            let pfns = [];
            for (let i = 0; i < newPas.length; i++) {
                pfns.push(i);
            }
            for (let i = 0; i < vasSize; i++) {
                newPas[pfns.splice(Math.floor(Math.random() * pfns.length), 1)[0]].implicitVpn = vpns.splice(Math.floor(Math.random() * vpns.length), 1)[0];
            }
            setPas(newPas);
        }
        setTlb([]);
        setHits(0)
    }

    useEffect(changePas, [pasSize]);

    const changeVas = () => {
        if (vasSize !== null) {
            let newVas = [];
            for (let i = 0; i < vasSize; i++) {
                newVas.push({ page: i })
            }
            setVirtualAddressSpace(newVas);
            changePas();
        }
    };

    useEffect(changeVas, [vasSize]);

    const addTlbEntry = () => {
        if (!tlb.find(tlbEntry => tlbEntry.explicitVpn === vpn) && vpn !== null && virtualAddressSpace.find(page => page.page === vpn)) {
            if (tlb.length === 8) {
                let randomTlbEntry = tlb[Math.floor(Math.random() * tlb.length)];
                let newTlb = tlb.filter((tlbEntry) => tlbEntry !== randomTlbEntry);
                setTlb(newTlb);
            }
            setTlb(prevTlb => [
                ...prevTlb,
                { explicitVpn: vpn, pfn: pas.find(pa => pa.implicitVpn === vpn).pfn }
            ]);
            document.getElementById('MissOrHit').textContent = "MISS!";
        } else {
            if (vpn !== null && virtualAddressSpace.find(page => page.page === vpn)) {
                let newTlb = tlb.filter((tlbEntry) => tlbEntry.explicitVpn !== vpn);
                newTlb.push({ explicitVpn: vpn, pfn: pas.find(pa => pa.implicitVpn === vpn).pfn })
                setTlb(newTlb);
                document.getElementById('MissOrHit').textContent = "HIT!";
                setHits(prevHits => ++prevHits);
            }
        }
    }

    useEffect(addTlbEntry, [vpn, hit]);

    const theme = createTheme({
        pallete: {
            primary: {
                main: 'red'
            },
            secondary: {
                main: 'red'
            }
        },
        components: {
            // Name of the component
            MuiButtonBase: {
                defaultProps: {

                },
            },
        },
    });

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <header> Samuel Rivera's TLB Simulator</header>
                </header>
                <body>
                    <div className="components">
                        <div id="settings">
                            <VirtualAddress setVpn={setVpn} virtualAddressSpace={virtualAddressSpace} setHit={setHit} />
                            <VirtualAddressSpaceSize vasSize={vasSize} setVasSize={setVasSize} pasSize={pasSize} />
                            <PhysicalAddressSpaceSize pasSize={pasSize} setPasSize={setPasSize} vasSize={vasSize} />
                        </div>
                        <VirtualAddressSpace id="vas" virtualAddressSpace={virtualAddressSpace} vpn={vpn} setVpn={setVpn} setHit={setHit} />
                        <TLB tlb={tlb} hits={hits} />
                        <PhysicalAddressSpace pas={pas} vpn={vpn} />
                    </div>
                </body>
            </ThemeProvider>
        </div>
    );
}

export default App;

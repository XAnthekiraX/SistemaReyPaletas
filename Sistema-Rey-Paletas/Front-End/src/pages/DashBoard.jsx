

import DashBoardCards from "../components/DashBoard/DashBoardCards";
import DashBoardProductTable from "../components/DashBoard/DashBoardProductTable";

export default function DashBoard() {
    return (
        <div className="h-full gap-5 w-full flex flex-col overflow-hidden overflow-y-auto p-1 lg:p-7 z-0">
            <DashBoardCards/>
            <DashBoardProductTable/>
        </div>
    )
}

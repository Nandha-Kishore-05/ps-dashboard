import "./ContentMain.css";
import Analysis from "../analysis/analysis";
import Status from "../status/status";
import Eligible from "../eligible/eligible";
import Programming from "../programming/programming";
import Slot from "../slot/slot";
import Ongoing from "../ongoing/ongoing";
import Achivements from "../achivements/achivements";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Achivements />
            <Ongoing />
            <Slot />
            
          
        </div>
        <div className="content-grid-two">
            <Programming />
            
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Eligible />
                <Status />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Analysis />
               
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain

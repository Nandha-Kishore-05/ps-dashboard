import { eligible } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./eligible.css";

const Eligible = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">ELIGIBLE COURSES</h3>
            <button className="grid-c-title-icon">
               
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    eligible.map((eligible) => (
                        <div className="grid-item" key = {eligible.id}>
                            <div className="grid-item-l">
                                
                                <h3 className="text">{ eligible.course } </h3>
                            </div>
                            <div className="grid-item-r">
                                <span className="text"> { eligible.rp }  RP</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Eligible;

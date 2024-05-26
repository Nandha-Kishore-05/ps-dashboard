import { status } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./status.css";

const Status = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">RP STATUS</h3>
            <button className="grid-c-title-icon">
              
            </button>
        </div>
        <div className="grid-c6-content">
            <div className="grid-items">
                {
                    status.map((status) => (
                        <div className="grid-item" key = { status.id }>
                            <div className="grid-item-top">
                                <div className="grid-item-top-l">
                                   
                                    <p className="text text-silver-v1">{ status.title }</p>
                                </div>
                                <div className="grid-item-top-r">
                                    <span className="text-silver-v1">RP { status.total_rp }</span>
                                </div>
                            </div>
                            <div className="grid-item-bottom">
                                <div className="grid-item-badges">
                                    <span className="grid-item-badge">RP taken { status.rp_taken }</span>
                                    <span className="grid-item-badge">RP left  { status.rp_left }</span>
                                </div>
                                <div className="grid-item-progress">
                                    <div className="grid-item-fill"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Status;

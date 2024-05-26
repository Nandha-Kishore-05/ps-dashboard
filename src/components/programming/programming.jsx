import "./programming.css";
import { iconsImgs } from "../../utils/images";
import { programming } from "../../data/data";

const Programming = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text"> PROGRAMMING STATUS</h3>
            <button className="grid-c-title-icon">
          
            </button>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">REWARDS POINTS</h2>
            <span className="lg-value">2100 RP</span>
        </div>
        <div className="grid-c4-content bg-jet">
            <div className="grid-items">
                {
                    programming.map((programming) => (
                        <div className="grid-item" key = { programming.id }>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.check } />
                                </div>
                                <p className="text text-silver-v1">{ programming.title } <span>{ programming.type }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">{ programming.rp } RP </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Programming;

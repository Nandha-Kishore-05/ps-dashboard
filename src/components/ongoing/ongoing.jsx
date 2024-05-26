import "./ongoing.css";
import { ongoing } from "../../data/data";


const Ongoing = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">ONGOING COURSE</h3>
            
        </div>
        <br />

        <div className="grid-content">
            <div className="grid-items">
                {
                    ongoing.map((ongoing) => (
                        <div className="grid-item" key = { ongoing.id }>
                            <div className="grid-item-l">
                              
                                <p className="text">{ ongoing.course  } <span>{ ongoing.date }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet">{ ongoing.rp } RP</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Ongoing;

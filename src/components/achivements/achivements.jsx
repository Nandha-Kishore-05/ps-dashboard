
import { FaMedal } from 'react-icons/fa';
import "./achivements.css";

const Achivements = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">ACHIVEMENTS</h3>
      </div>
      <div className="grid-c-content"><br />
        <ul className="achievements-list">
         
          <li>
            <FaMedal className="achievement-icon" style={{ fontSize: 30 }} />
           <h3> Achieved gold medal in UI-UX </h3>
          </li>
          <li>
            <FaMedal className="achievement-icon" style={{ color: 'grey',fontSize: 30 }} />
            <h3> Achieved silver medal in C LEVEL-1 </h3>
          </li>
          <li>
            <FaMedal className="achievement-icon" style={{ fontSize: 30 }} />
            <h3> Achieved gold medal in  C LEVEL-2 </h3>
          </li>
          <li>
            <FaMedal className="achievement-icon" style={{ color: 'brown', fontSize: 30}}/>
            <h3> Achieved bronze  medal in PY  - 1 </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achivements;

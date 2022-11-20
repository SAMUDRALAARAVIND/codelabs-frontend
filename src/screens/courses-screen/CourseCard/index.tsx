import "./index.scss";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from "react-router-dom";

export const CourseCard = ({course}:{course: any}) => {
  return (
    <div className="course-card-root-container">
      <div className="badge">
        <div>
          <del>{course.oldPrice}</del>
          <p>{course.newPrice}</p>
        </div>
        <div className="discount">
          {course.discount}
        </div>
      </div>
      <div className="header-top"></div>
      <div className="course-card-header-image">
        <img src={course?.imageUrl}/>
      </div>
      <div className="header-bottom"></div>
      <div className="badges">
        { course?.cardDetails?.chips?.map((chip: any, key: any) => {
          return <div className="chip" key={key}>{chip}</div>;
        })}
      </div>
        <h3>{course?.cardDetails?.title}</h3>
        <div className="bottom-list">
            {
                course?.cardDetails?.bottomValues?.map((text:any, key:any) => {
                    return (
                        <div key={key}>
                            {
                                key === 0 ? <AccessAlarmIcon /> : key === 1 ? <CalendarMonthIcon /> : <CurrencyRupeeIcon />
                            }
                            <b>{text}</b>
                        </div>
                    )
                })
            }
        </div>
        <Link className="link" to={`/course-details/${course.courseId}`}>View Details </Link>
    </div>
  );
};

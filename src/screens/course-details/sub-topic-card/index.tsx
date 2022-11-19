import "./index.scss";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const SubTopicCard = ({subtopic} : {subtopic: any}) => {
  return (
    <div className="subtopics-root-container">
      <div className="title">
        <b>{subtopic.title}</b>
      </div>
      <div className="subtopics">
        {subtopic?.topics?.map?.((topicName: string , key: any) => {
          return (
            <div className="subtopic-item" key={key}>
               <CheckCircleOutlineIcon style={{color: '#D3DCE6'}}/>
              <p>{topicName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

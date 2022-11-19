import "./index.scss"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export const HighLighter = () => {
    return (
        <div className='home-highlighter-root-container'>
            <div className="item-container">
                <div className="item">
                    <b>1000+</b> Satisfied Students
                </div>
                <div className="item">
                    <CheckCircleIcon className="icon"/>
                    <b>6 LPA +</b> Assured Placement
                </div>
                <div className="item">
                    <AutoGraphIcon className="icon"/>
                    <b>24 LPA</b> Highest Package
                </div>
                <div className="item">
                    <b>100+</b> hours of live classes
                </div>
                <div className="item">
                    <b>500+</b> Practice problems
                </div>
                <div className="item">
                    <AccessTimeIcon className="icon"/>
                    <b>6:00PM to 10:00PM</b>
                    Daily class timings on week days
                </div>

            </div>
        </div>
    )
}

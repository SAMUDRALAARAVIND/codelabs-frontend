import "./index.scss"

import { TopNavigation } from "../top-navigation"

const videos = [
    {
        title: 'Function Call Stack in JavaScript | Front-End Master Course',
        id:'Yw_XVoc9S_o'
    },
    {
        title:'Block Scope Variable in JavaScript',
        id:'TUP_I5E-fIM'
    },
    {
        title:'Local And Global Scope in JavaScript',
        id:'cgfIxaWEyUQ'
    },
    {
        title:'Closure in JavaScript',
        id:'VL43AveAM54'
    },
    {
        title:'Call by Value Call by Reference in JavaScript',
        id:'KtunNl0_r_c'
    },
]

export const DemoLectures = () => {
    return (
        <div className="demo-lectures">
            <TopNavigation />
            <div className="video-list">
                {
                    videos.map((video, key) => {
                        return (
                            <div key={key} className="video">
                                <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                height="200"
                                width="200"
                            >
                                
                            </iframe>
                            <p>{video.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
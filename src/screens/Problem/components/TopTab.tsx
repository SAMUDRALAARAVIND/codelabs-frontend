import { Tab } from "./problem-model"

interface TopTabProps extends Tab {
    onClick: (identifier: string) => void;
    activeTab: string
}

export const TopTab = ({identifier , title, onClick , activeTab , ...props} : TopTabProps) =>{

    return (
        <div 
            onClick={() => onClick(identifier)}
            style={{
                ...styles.tab,
                backgroundColor: activeTab === identifier ? 'white': 'rgb(250,250,250)',
                borderBottom:activeTab === identifier ? 'none' : '3px solid #e7e7e7'
            }}
        >
            <props.icon style={{color: '#7D7575'}}/>
            <span>{title}</span>
        </div>
    )
}

const styles = {
    tab: {
        display: 'flex' as 'flex',
        flexFlow:'row wrap' as 'row wrap',
        alignItems: 'center' as 'center',
        padding: '10px',
        cursor:'pointer',
        border: "3px solid #e7e7e7"
    }
}
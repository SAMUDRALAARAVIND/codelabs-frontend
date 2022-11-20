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
                borderBottom:'none'
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
        border:'1px solid #e7e7e7',
        borderBottom: '2px solid red',
        cursor:'pointer',
    }
}
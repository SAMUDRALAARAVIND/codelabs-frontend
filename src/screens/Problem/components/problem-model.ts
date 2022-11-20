import DescriptionIcon from '@mui/icons-material/Description';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CommentIcon from '@mui/icons-material/Comment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export interface Tab {
    title: string ,
    identifier: string,
    icon: any
}

export const tabIdentifiers = {
    DESCRIPTION: 'DESCRIPTION' ,
    SOLUTION: 'SOLUTION',
    DISCUSSIONS:'DISCUSSIONS',
    SUBMISSIONS:'SUBMISSIONS'
}

export const topTabs: Array<Tab>  = [
    {
        title: 'Description',
        identifier:tabIdentifiers.DESCRIPTION,
        icon:DescriptionIcon
    },
    {
        title:'Solution',
        identifier:tabIdentifiers.SOLUTION,
        icon: EmojiObjectsIcon
    },
    {
        title:'Discussions',
        identifier: tabIdentifiers.DISCUSSIONS,
        icon: CommentIcon,
    },
    {
        title:'Submissions',
        identifier: tabIdentifiers.SUBMISSIONS,
        icon:AccessTimeIcon
    }
]
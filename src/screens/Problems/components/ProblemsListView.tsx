import { observer } from "@legendapp/state/react";
import {Table} from "antd"
import { useEffect, useRef } from "react";
import { createProblemsListModel } from "../problems-model";

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key:'title',
    render: (text: any) => <a>{text}</a>,
    onCell: (record: any, rowIndex: any) => {
      return {
        onClick: () => {
          console.log(record, rowIndex);
          window.location.href = `/problem/${record.problem_id}`
        }
      }
    }
  },
  {
    title: 'Level',
    dataIndex:'level',
    key:'level',
    render: (text: any) => {
      if(text === 'Easy') return <b style={styles.easy}>{text}</b>
      if(text === 'Medium') return <b style={styles.medium}>{text}</b>
      return <b style={styles.hard}>{text}</b>
    }
  },
  {
    title:'Tags',
    dataIndex:'tags',
    key:'tags'
  }
]

export const ProblemsListView = observer(() => {
    const problemsList$ = useRef(createProblemsListModel()).current;

    useEffect(() => {
      problemsList$.actions.fetchProblemsList()
    }, [])

    if(problemsList$.obs?.apiStatus?.get?.() === 'error'){
      return <h1>Something went wrong</h1>
    }
    
    if(problemsList$?.obs?.data?.get?.() === undefined){
        return <h1>Loading...</h1>
    }

    return (
      <Table columns={columns} dataSource={problemsList$?.obs?.data?.get?.()} />
    );
});

const styles = {
  easy: {
    color: 'green'
  },
  medium:{
    color: 'orange'
  },
  hard:{
    color:'red'
  }
}
import { TopNavigation } from "../global-components/top-navigation"
import "./index.scss"
import { useCallback, useState } from "react";
import {topTabs , Tab, tabIdentifiers} from "./components/problem-model"
import { TopTab } from "./components/TopTab";
import { Editor } from "./components/Editor";
import { Solution } from "./components/Solution";
import { Discussions } from "./components/Discussions";
import { Submissions } from "./components/Submissions";
import { Description } from "./components/Description";

export const Problem = () => {
    const [activeTab , setActiveTab] = useState<string>(topTabs[0].identifier)

    const changeTab = useCallback((identifier: string) => {
        setActiveTab(identifier)
    }, [])

    return (
        <div className="problem-root-container">
            <TopNavigation />
            <div className="problem-container">
                <div className="root-toptabs">
                    {
                        topTabs?.map?.((tab: Tab, key) => {
                            return <TopTab 
                                        title={tab?.title} 
                                        identifier={tab?.identifier} 
                                        key={key} 
                                        onClick={changeTab}
                                        activeTab={activeTab}
                                        icon={tab.icon}
                                    />
                        })
                    }
                </div>
                <div className="children-component-container">
                    {
                        activeTab === tabIdentifiers.DESCRIPTION &&
                        <div className="editor-included">
                            <Description />
                            <Editor />
                        </div>
                    }
                    {
                        activeTab === tabIdentifiers.SOLUTION && 
                        <div className="editor-included">
                            <Solution />
                            <Editor />
                        </div>
                    }
                    {
                        activeTab === tabIdentifiers.DISCUSSIONS &&
                        <div>
                            <Discussions />
                        </div>
                    },
                    {
                        activeTab === tabIdentifiers.SUBMISSIONS &&
                        <div className="editor-included">
                            <Submissions />
                            <Editor />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
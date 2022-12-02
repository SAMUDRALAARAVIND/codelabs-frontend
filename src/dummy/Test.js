import { observable } from "@legendapp/state"
import { useObservable } from "@legendapp/state/react"
import {observer} from "@legendapp/state/react"
// const state = observable({count: 0})
// console.log(state.count?.get?.());
export const Test = observer(() => {
    const state = useObservable({count: 0})
    console.log("redered")
    const increment = () => {
        state.count?.set?.((old) => {
            console.log(old)
            return old+1;
        })
    }
    return (
        <div>
            <div>Hell world {state.count?.get?.()}</div>
        <button 
            onClick={increment}
        >
            Click Me
        </button>
        </div>
    )
})
import "./problem.scss"

export const ProblemStatement = () => {
    return (
        <div className="problem-statement-root-container">
            <p>Given an array of integers nums and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code></p>
            <p>You may assume that each input would have <b><i>exactly one solution</i></b>, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>
            <div className="example-container">
                <h3>Example 1</h3>
                <div className="example">
                    <div>
                        <b>Input</b>: nums = [2,7,11,15], target = 9 Output: [0,1]
                    </div>
                    <div>
                        <b>Explanation</b>: Because nums[0] + nums[1] == 9, we return [0, 1].
                    </div>
                </div>
            </div>
            <div className="example-container">
                <h3>Example 1</h3>
                <div className="example"> 
                    <div>
                        <b>Input</b>: nums = [2,7,11,15], target = 9 Output: [0,1]
                    </div>
                    <div>
                        <b>Explanation</b>: Because nums[0] + nums[1] == 9, we return [0, 1].
                    </div>
                </div>
            </div>
            <div className="example-container">
                <h3>Example 1</h3>
                <div className="example">
                    <div>
                        <b>Input</b>: nums = [2,7,11,15], target = 9 Output: [0,1]
                    </div>
                    <div>
                        <b>Explanation</b>: Because nums[0] + nums[1] == 9, we return [0, 1].
                    </div>
                </div>
            </div>
            <div className="constraints">
                <ul>
                    <li>{`2 <= nums.length <= 104`}</li>
                    <li>{`-109 <= nums[i] <= 109`}</li>
                    <li>{`-109 <= target <= 109`}</li>
                    <li><b>{`Only one valid answer exists.`}</b></li>
                </ul>
            </div>
            <div className="follow-up">
             <b>Follow-up</b>: Can you come up with an algorithm that is less than O(n2) time complexity?
            </div>
        </div>
    )
}
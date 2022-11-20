import "./index.scss"

const imagesList = [
    "html.png",
    "css.png",
    "react.png",
    "node.png",
    "mongo.png",
    "cpp.png",
    "dsa.png"
]

const admissionSteps = [
    {
        title: 'Pre Bootcamp Program' ,
        description: 'this is a 5 days program that acts as an introduction to the main 4 months program.You can enroll only if you clear the eligibility test' 
    },
    {
        title: 'Entrance test',
        description: 'An online aptitude test is conducted to screen candidates. This only tests your basic class 12 mathematical aptitude & logical thinking.'
    }
]

export const CoursesImagesAnimation= () => {
    return (
        <div className="courses-images-root-container">
            <h2 style={styles.title}>Course We Offer</h2>
           <div className="courses-images-animation-container">
           {
            imagesList.map((image, key) => {
                return (
                    <img 
                        key={key} 
                        src={`/images/courses/${image}`} 
                        width="100" 
                        height="100" 
                    />
                )
            })
           }
           </div>
           <div className="admissions">
                <h2 style={styles.title}>Admission Process</h2>
                {
                    admissionSteps.map((step , key) => {
                        return (
                            <div className={"step "+`step${key+1}`} key={key}>
                                <h3 s-no="1">{step.title}</h3>
                                <p s-no="2">{step.description}</p>
                            </div>
                        )
                    })
                }
           </div>
        </div>
    )
}

const styles = {
    title: {
        textAlign: 'center' as 'center'
    }
}
import './ContentSection.css'

// At least three content sections, each with a heading and multiple items
// A reusable card component used at least five times with different props
export default function ContentSection({ Name, Price, Description, Rating, Review}) {
    return (
        <section>
            <h2 id="modelName"> {Name}</h2>
            <p id="price"> {Price} </p>
            <p id="Description"> {Description}</p>
            <p id="rating"> {Rating}</p>
            <div id = "review"> {Review}</div>
        </section>
    )
}
import './ContentSection.css';

export default function ContentSection({ Name, Price, Description, Rating, Review, Image }) {
    return (
        <article className="content-card">
            <div className="content-card-image-placeholder">
                <img src={Image} alt={Name + ' logo'} />
            </div>
            <h3 className="content-card-title">{Name}</h3>
            <p className="content-card-price">{Price}</p>
            <p className="content-card-description">{Description}</p>
            <p className="content-card-rating">{Rating}</p>
            <div className="content-card-review">{Review}</div>
        </article>
    );
}
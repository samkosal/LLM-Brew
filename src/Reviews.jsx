import './Reviews.css';

const reviews = [
  {
    name: 'OpenAI GPT-4',
    rating: '5/5',
    stars: '★★★★★',
    text: 'Excellent reasoning and coding support. Consistently reliable for complex prompts.'
  },
  {
    name: 'Anthropic Claude',
    rating: '5/5',
    stars: '★★★★★',
    text: 'Very strong writing quality and thoughtful responses. Great for long-form tasks.'
  },
  {
    name: 'Google Gemini',
    rating: '4.5/5',
    stars: '★★★★☆',
    text: 'Great summarization and research support, with fast and practical outputs.'
  },
  {
    name: 'Meta Llama 3',
    rating: '4/5',
    stars: '★★★★☆',
    text: 'Flexible and open for experimentation. Strong performance for self-hosted workflows.'
  },
  {
    name: 'Qwen',
    rating: '4.5/5',
    stars: '★★★★☆',
    text: 'Solid coding and multilingual support with very good value for daily use.'
  }
];

export default function Reviews() {
  return (
    <section className="reviews-section">
      <h2>LLM Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((item) => (
          <article className="review-card" key={item.name}>
            <h3>{item.name}</h3>
            <p className="review-stars" aria-label={`${item.rating} stars`}>
              {item.stars} <span className="rating-number">{item.rating}</span>
            </p>
            <p className="review-text">&ldquo;{item.text}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  );
}

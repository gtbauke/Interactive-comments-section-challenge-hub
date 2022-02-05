import './styles.css';

//TODO: active states, responsivenes, reply styles
export default function Comment({ user, score, date, message, avatar, replies, isReply }) {
  return (
    <>
      <div className={isReply ? 'reply' : 'comment'}>
        <div className="score-wrapper">
          <img src="/images/icon-plus.svg" alt="Plus icon" className="icon" />
          <p className="score">{score}</p>
          <img src="/images/icon-minus.svg" alt="Minus icon" className="icon" />
        </div>

        <header className="comment-header">
          <div className="comment-profile-info">
            <img src={avatar} alt="Profile icon" className="comment-avatar" />
            <p className="comment-user">{user}</p>
            <p className="comment-create-date">{date}</p>
          </div>

          <div className="comment-reply-button">
            <img src="/images/icon-reply.svg" alt="Reply icon" className="reply-icon" />
            <p>Reply</p>
          </div>
        </header>

        <p className="comment-content">
          {message}
        </p>
      </div>
      {replies?.map(reply => (
        <Comment
          key={reply.id}
          user={reply.user.username}
          score={reply.score}
          date={reply.createdAt}
          message={reply.content}
          avatar={reply.user.image.webp}
          replies={reply.replies}
          isReply
        />
      ))}
    </>
  );
}

import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';

import commentData from './data.json';

import Comment from './components/Comment';

export default function App() {
  return (
    <>
      {commentData.comments.map(comment => (
        <Comment
          key={comment.id}
          user={comment.user.username}
          score={comment.score}
          date={comment.createdAt}
          message={comment.content}
          avatar={comment.user.image.webp}
          replies={comment.replies}
        />
      ))}
    </>
  );
}

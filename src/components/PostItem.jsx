import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

  return (
    <div>
      <div className='post'>
        <div className='post__content'>
					<strong>{props.number} {props.post.title}</strong>
          <div>
						<p>{props.post.body}</p>
          </div>
        </div>
        <div className='post__btns'>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
			</div>
    </div>
  );
};

export default PostItem;

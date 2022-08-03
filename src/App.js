import './styles/App.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	// Получаем пост из дочернего элемента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='app'>
			<MyButton style={{ marginTop: '20px'}} onClick={() => setModal(true)}>
				Coздать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
		</div>
	);
}

export default App;

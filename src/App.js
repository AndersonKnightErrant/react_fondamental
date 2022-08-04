import './styles/App.css';
import { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';
import PostService from './components/API/PostService';
import Loader from './components/UI/Loader/Loader';
import useFetching from './components/hooks/useFetching';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
		const posts = await PostService.getAll()
		setPosts(posts)
	})
	
	useEffect(() => {
		console.log('useff')
		fetchPosts()
	}, [])
	

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}


	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='app'>
			<MyButton onClick={fetchPosts}>
				Загрузить посты
			</MyButton>
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
			{postError &&
				<h1>Произошла ошибка ${postError}</h1>
			}
			{isPostLoading
				? <div style={{display:'flex', 'justifyContent': 'center', 'marginTop': '50px'}}><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты'} />
			}
				
		</div>
	);
}

export default App;

import './styles/App.css';
import {useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
		const [posts, setPosts] = useState([
		{ id: 1, title: 'JS', body: 'love this language' },
		{ id: 2, title: 'Piton', body: " I don't know this language" },
		{ id: 3, title: 'Java', body: "don't know this language" },
	]);
	
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	
	const sortedPosts = useMemo(() => {
		console.log('функция сортировки отработала');
		if (filter.sort) {
			return ([...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])))
		}
		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
	}, [filter.query, sortedPosts])

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

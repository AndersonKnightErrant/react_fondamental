import './styles/App.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
		const [posts, setPosts] = useState([
		{ id: 1, title: 'JS', body: 'good laungwich' },
		{ id: 2, title: 'Piton', body: 'good laungwich' },
		{ id: 3, title: 'Java', body: 'good laungwich' },
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}

	// Получаем пост из дочернего элемента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='app'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}} />
			<MySelect/>
			{posts.length
				?
				<PostList remove={removePost} posts={posts} title={'Список постов 1'} />
				:
				<div><h1 style={{ textAlign: 'center' }}>
					Посты отсутстуют!
				</h1></div>
			}
		</div>
	);
}

export default App;

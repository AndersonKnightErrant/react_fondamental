import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../components/API/PostService';
import useFetching from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({})
	const [fetchPostById, isLoading, error] = useFetching(async(id) => {
		const response = await PostService.getById(id)
		setPost(response.data);
		console.log(response.data);
	})

	useEffect(() => {
		fetchPostById(params.id)
	},[])
	

	return (
		<div>
			<h1>Пост {params.id}.</h1>
			{isLoading
				? <Loader/>
				: <div>{post.id}{post.title}</div>
			}
			<h1>
				<p>Комментарии</p>
			</h1>
		</div>
	);
}

export default PostIdPage;
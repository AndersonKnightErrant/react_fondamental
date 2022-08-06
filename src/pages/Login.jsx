import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
	return (
		<div>
			<h1>Введите логин и пароль</h1>
			<form action="" method="post">
				<MyInput type="text" placeholder="Введите логин" />
				<MyInput type="password" placeholder="Введите пароль" />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
}

export default Login;
import './App.css';
import Counter from '../src/features/counter/Counter';
import Posts from '../src/features/posts/Posts';

function App() {
	return (
		<div className="App">
			<Posts />
			<Counter />
		</div>
	);
}

export default App;

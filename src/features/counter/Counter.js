import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	decrement,
	increment,
	incrementByAmount,
	resetCounter,
} from './counterSlice';
import './counter.css';

export default function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('5');

	return (
		<div className="counter-wrapper">
			<div className="title">
				<h1>Redux Counter exemplu</h1>
			</div>
			<div className="explanation">
				<p>
					Mai jos am creat un exemplu simplu de folosire a
					Redux-Toolkit, una dintre cele mai raspandite solutii de
					state-management al unei aplicatii React.
				</p>
				<h2>Cum functioneaza?</h2>
				<h3>Sectiunea 1 (Mareste/Micsoreaza Valoarea)</h3>
				<p>
					Valoarea initiala (initial state) a aplicatiei este 0.
					Apasand butonul "Mareste valoarea", numarul 0 va creste cu 1
					ori de cate ori acesta va fi apasat.
				</p>
				<p>
					Acelasi principiu se aplica si la apasarea butonului
					"Micsoreaza valoarea", doar ca aici valoarea afisata la un
					moment dat va scadea cu 1.
				</p>
				<h3>Sectiunea 2 (Adauga o valoare)</h3>
				<p>
					Aici, la fel ca si mai sus, introducand in casuta din stanga
					un numar aleator, starea initiala sau starea curenta a
					aplicatie va creste conform valorii alese.
				</p>
				<h3>Sectiunea 3 (Reseteaza contorul)</h3>
				<p>
					Apasand butonul "Reseteaza contorul", va aduce aplicatia la
					starea initiala, adica 0.
				</p>
			</div>
			<div className="increment-decrement">
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}>
					Mareste valoarea
				</button>
				<span>{count}</span>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}>
					Micsoreaza valoarea
				</button>
			</div>
			<div className="increment-by-amount">
				<input
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount) || 0))
					}>
					Adauga o valoare
				</button>
			</div>

			<div className="reset">
				<button onClick={() => dispatch(resetCounter(count))}>
					Reseteaza contorul
				</button>
			</div>
		</div>
	);
}

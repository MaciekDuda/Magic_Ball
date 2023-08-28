const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
	'Tak!',
	'Nie :(',
	'Któż to wie?',
	'No ba!',
	'Lepiej nie pytaj...',
	'Jasne Byku!',
	'Oj nie, nie.',
	'Skoro Bóg tak chciał...',
	'Jeden rabin powie tak, drugi rabin powie tak.',
	'Aj daj spokój, kto to widział?!',
	'Trochę tak, trochę nie.',
	' Po dłuższym zastanowieniu uważam, że tak.',
	'Teraz żartujesz, prawda?',
	'Mi byłoby wstyd o to pytać...',
	'Hmm... poproszę o inny zestaw pytań',
	'Można prosić 50/50?',
	'Pytasz dzika czy sra w lesie!',
	'To fundamentalne pytanie, na które nie ma jednak odpowiedzi',
	'I tak, i nie',
	'Serio...?!',
	'Obawiam się, że nie',
];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(inputCheck, 1000);
};

const inputCheck = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
		error.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Zakończ swoje pytanie znakiem "?"';
		answer.textContent = '';
	} else if (input.value === '') {
		error.textContent = 'Najpierw zadaj pytanie.';
		answer.textContent = '';
	}
	ball.classList.remove('shake-animation');
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answersArr.length);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;

	console.log(number);
};

ball.addEventListener('click', shakeBall);

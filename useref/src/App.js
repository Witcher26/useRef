import './App.css';
import React from 'react';

function App() {
  const [numbers, setNumbers] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
  const ulRef = React.useRef();
  const timerRef = React.useRef();

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length-1] + 1]);
    console.log(ulRef);
    console.log(numbers);
  };

  //выполнение функции при scroll на javascript
  // const ulElement = document.querySelector('ul');
  // ulElement.addEventListener('scroll', handleScroll);
  //ошибка на null, т.к. функция с запросом ul вызывается до рендера. Используем useEffct и говорим, чтоб фукция вызывалась при componentDidMount.
  // Для скрола в css свойство (App.css) нужно добавить ul { height: 150px; overflow: auto;}

  const handleScroll = () => {
    console.log("скроллинг страницы");
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000);
  };

  const stop = () => {
    console.log(timerRef.current);
    clearInterval(timerRef.current);
  }

  React.useEffect(() => {
    ulRef.current.addEventListener('scroll', handleScroll);
  }, []);

  const removeScroll = () => {
    console.log("Удаление скрола");
    ulRef.current.removeEventListener('scroll', handleScroll)
  };

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Добавить число</button>
      <button onClick={removeScroll}>Удалить скролл</button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default App;

import React ,{useState} from 'react'
const WelcomMessage = () =>{
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');
  const handlerInputChange = (e) =>{
    setName(e.target.value);
  };

  const handlerButtonClick = () =>{
    setMessage(`Xin chào, ${name}!`);
  };

  return(
    <div style={{padding:'20px'}}>
      <h1>Chào mừng đến với ứng dụng nhập tên</h1>
      <input type="text"
      placeholder="nhập tên của bạn"
      value={name}
      onChange={handlerInputChange}
      />

      <button onClick={handlerButtonClick}>
        Chào mừng
      </button>
      {message&&<p>{message} </p>}
    </div>
  );
};

export default WelcomMessage;
import React, {useState} from 'react';
import './App.css';
import Report from "./Report";

function App() {
    const [input, setInput] = useState<string>("")
    const [verified, setVerified] = useState<Boolean>(false)
    const [isPasswordWrong, setIsPasswordWrong] = useState<Boolean>(false)

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    // onSubmit
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(input)
        if (input === "dlrocks") {
            setVerified(true)
        } else setIsPasswordWrong(true)
    };

    return (
        <div className="App">
            {verified ? <Report/> :
                <div >
                    <form onSubmit={onSubmit} className="app__password-container" >
                    <p>
                        Please enter the passkey to continue:
                    </p>
                        {isPasswordWrong && <p>Wrong passkey!</p>}
                            <input
                                className="app__password-form"
                                name='password'
                                id='password'
                                type='password'
                                placeholder='Passkey'
                                onChange={onChange}
                                required
                            />
                            <button type='submit' className="app__password-submit">Login</button>
                    </form>
                </div>}
        </div>
    );
}

export default App;

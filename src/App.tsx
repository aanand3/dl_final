import React, {useState} from 'react';
import './App.css';
import ReactPlayer from "react-player"


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
            {/*{verified ? <Report/> :*/}
            {/*    <div>*/}
            {/*        <form onSubmit={onSubmit} className="app__password-container">*/}
            {/*            <p>*/}
            {/*                Please enter the passkey to continue:*/}
            {/*            </p>*/}
            {/*            {isPasswordWrong && <p>Wrong passkey!</p>}*/}
            {/*            <input*/}
            {/*                className="app__password-form"*/}
            {/*                name='password'*/}
            {/*                id='password'*/}
            {/*                type='password'*/}
            {/*                placeholder='Passkey'*/}
            {/*                onChange={onChange}*/}
            {/*                required*/}
            {/*            />*/}
            {/*            <button type='submit' className="app__password-submit">Login</button>*/}
            {/*        </form>*/}
            {/*    </div>}*/}
            <h1>Supplemental media</h1>
            <h2>Hopefully these snippets will help to add context about our progress, setbacks, and our many lines of
                effort.</h2>
            <h3>Thanks for a fun and educational semester - Andrew, Bennet, and Aanand</h3>
            <div className="app__video-container">
                <h1>Full match (50s)</h1>
                <ReactPlayer
                    url="https://streamable.com/2nbcni"
                    controls
                />
                <p>Our image-based agent had many drawbacks -- among them, a 'hitch' when in the search state, as well
                    as a tendency to overshoot/overkick the puck. </p>
            </div>

            <div className="app__video-container">
                <h1>Image-based pursuit</h1>
                <ReactPlayer
                    url="https://streamable.com/om2v3g"
                    controls
                />
                <p>Our image-based agent was able to track down and pursue a puck, as long as it remained in our
                    field of view.</p>
            </div>

            <div className="app__video-container">
                <h1>State-based frustrations</h1>
                <ReactPlayer
                    url="https://streamable.com/gg2vse"
                    controls
                />
                <p>As mentioned, our state-based agent displayed a lot of frustrating behavior, markedly this one, where
                    it would hide in the goal and wait for the other team to bring them the puck. </p>
            </div>

            <div className="app__video-container">
                <h1>State-based starting point</h1>
                <ReactPlayer
                    url="https://streamable.com/jwfhcd"
                    controls
                />
                <p>Similar behavior occurred here, where the state-based agent went directly for the reward spike
                    awaiting them in the opponent's goal. </p>
            </div>
        </div>

    );
}

export default App;

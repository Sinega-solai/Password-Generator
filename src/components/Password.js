import React, { useState } from 'react';
import './Password.css';

const Password = () => {
    const [length, setLength] = useState(6);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const genpass = () => {
        let charset = '';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+';
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
    };

    return (
        <div className="passwordGenerator">
            <h2>Strong password Generator</h2>
            <div className="input-group">
                <label htmlFor="num">Password Length:</label>
                <input type="number" id='num' value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id='upper' checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
                <label htmlFor="upper"> Include Uppercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id='lower' checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
                <label htmlFor="lower"> Include Lowercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id='numbers' checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                <label htmlFor="numbers"> Include Numbers</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id='symbols' checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                <label htmlFor="symbols"> Include Symbols</label>
            </div>
            <button className='generatebtn' onClick={genpass}>Generate password</button>
            <div className="generate-password">
                <input type="text" readOnly value={password} />
                <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    );
};

export default Password;

import React, { useState } from 'react';

const MultiplyAndAdd: React.FC = () => {
    const [input, setInput] = useState<string | number>('');
    const [result, setResult] = useState<string | number | null>(null);

    const processInput = (value: string | number) => {
        if (isNaN(Number(value))) {
            return "Error";
        }
        return Number(value) * 50 + 6;
    };

    const handleCalculate = () => {
        const output = processInput(input);
        setResult(output);
    };

    return (
        <div className="multiply-and-add">
            <h1>50ga kopaytiring va 6ni qoshiring</h1>
            <div className="input-group">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="raqam kirit " 
                />
            </div>
            <button onClick={handleCalculate}>hisobla</button>
            {result !== null && <h2>natija: {result}</h2>}
        </div>
    );
};

export default MultiplyAndAdd;

import React, { useState } from 'react';  // Add this import statement

const IdeaGenerator = () =>{
    const [target, setTarget] = useState("")
    const [interest, setInterest] = useState("")
    return(
        <div>
            <div className='text-black w-full my-20 mx-8 text-center'>
                <div>
                    Create your sales script
                </div>
                <input type='text' placeholder='' onChange={(e) => setTarget(e.target.value)} value={target}></input>
                <input type='text' placeholder='' onChange={(e) => setInterest(e.interest.value)} value={interest}></input>
                <div>
                    Button
                </div>
            </div>
        </div>
    );
};

export default IdeaGenerator;
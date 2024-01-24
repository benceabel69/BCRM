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

// const firebaseConfig = {
//   apiKey: "AIzaSyDUZIKQUYKVnqQByfZlS1Xz3ywj5Z1feoc",
//   authDomain: "bcrm-c8d86.firebaseapp.com",
//   projectId: "bcrm-c8d86",
//   storageBucket: "bcrm-c8d86.appspot.com",
//   messagingSenderId: "764896542444",
//   appId: "1:764896542444:web:ec4a5aebc67f01b6302fc9",
//   measurementId: "G-LHK1ZX4WVK"
// };

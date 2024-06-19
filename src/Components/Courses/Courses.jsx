import React from 'react';
import {useParams} from "react-router-dom";
function Courses(props) {
       const {id} = useParams();

    return (
        <div>
            Courseid -{id}
            <h1 className='text-5xl font-thin font-sans-serif bg-[#1da1f2] mt-5'>hii hello world</h1>
            <p className='w-32 text-3xl text-blue border-4 rounded m-auto'>arun kumar</p>
            <div class="grid gap-4 grid-cols-3 grid-rows-3">
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
</div>
       </div>
    );
}
  
export default Courses;
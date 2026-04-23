
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';
import { Style } from 'util';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,
  faTrashCan,
  faCircle,
} from "@fortawesome/free-regular-svg-icons"; import { useEffect } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getJobs, addJob, deleteJob } from "./api/todoApi";
import { updateJob } from './api/todoApi';
import { TODO_STATUS } from './constants/todo';
import { hover } from '@testing-library/user-event/dist/hover';
import { faBroom } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [todos, setTodos] = useState<any[]>([])
  const [job,setJob] = useState("")
  const [jobs, setJobs] = useState<string[]>([]);
  const [reloadData, setReloadData] = useState(false)

  //call API
  useEffect(() => {
    getJobs().then((data: any) => {
      setTodos(data)
    })
  }, [reloadData])

  const handleAddJob = () => {
    addJob({
      status: TODO_STATUS.uncompleted,
      text: jobs
    }).then((): void => {
      setReloadData(!reloadData)
    });
    setJobs([""])
  }

  const handleUpdateCompleted = (id: number, data: any): any => {
    updateJob(id, { ...data, status: 1 }).then(() => {
      setReloadData(!reloadData);
    });
  };



  const handleDelete = (id: any) => {
    deleteJob(id)
    setReloadData(!reloadData)
  }

  const handleUpdateStatus = (job:any) => {
 updateJob(job?.id, {
  ...job,
  status: TODO_STATUS.completed
  
 }).then(() => {setReloadData(!reloadData)})
  }
  const handleUpdateStatus2 = (job:any) => {
    updateJob(job?.id, {
     ...job,
     status: TODO_STATUS.uncompleted
    }).then(() => {setReloadData(!reloadData)})
     }
  // const handleClearCompleted = async () => {
  //   const completedJobs: any[] = jobs.filter((job: any) => job?.status === TODO_STATUS.completed)
  //   for (const job of completedJobs) {
  //     await deleteJob(job?.id)
  //   }
  //   setReloadData(!reloadData)
  // }

  const handleClearCompleted = async () => {
    const conmpletedJob = todos.filter((job) => job?.status === TODO_STATUS.completed)
    for(const job of conmpletedJob)
    {
      await deleteJob(job?.id)
    }
    setReloadData(!reloadData)
  }

  return (
    <div className="App">
      <div className='container'>
        <div>
          <input
            type="text"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-gray-900 border rounded-s-3xl bg-red-50 focus:text-black focus:outline-none focus:ring-0"
            placeholder="What do you need to do?"
            required
            onChange={(event: any) => {
              setJobs(event.target.value);
            }}
            value={jobs}
          />
          <button
            type="submit"
            className="button-add text-white end-0 bottom-0 hover:bg-blue-700 focus:outline-none font-medium rounded-e-3xl text-sm px-4 py-2 bg-blue-500"
            onClick={() => {
              handleAddJob();
            }}
          >
            ADD
          </button>
        </div>
        <div className='list-styled'>
          <ul style={{
            listStyleType: "none",
            marginRight: 50,
            paddingTop: 25
          }} className="to-do-list">
            <div className="relative w-full max-w-lg list-none bg-red-50 rounded-3xl pb-20">
              {
                todos.map((job: any, index) => {
                  return (
                    <li key={index}
                    className="list flex justify-between p-3 border-wrapper relative px-8"
                  >
                    {job?.status === TODO_STATUS.uncompleted && (
                      <div className="flex-items-center">
                        <FontAwesomeIcon
                          className="fa-icon pr-4 size-6 hover:text-white-700"
                          icon={faCircle}
                          // onClick={() => handleUpdateCompleted(job?.id, job)}
                          
                          onClick={() => {handleUpdateStatus(job)}}
                          
                          
                        />
                        <span className="text-lg">{job?.text}</span>
                      </div>
                    )}
                    {job?.status === TODO_STATUS.completed && (
                      <div className="flex-items-center">
                        <FontAwesomeIcon
                          // className="faCheck-icon pr-4 size-6 text-orange-500"

                          className="faCheck-icon pr-4 size-6 hover: text-orange-500"
                          icon={faCircleCheck}
                          onClick={() => {handleUpdateStatus2(job)}}
                        />
                        <span className="text-check text-lg opacity-50 line-through">
                          {job?.text}
                        </span>
                      </div>
                    )}
                    <FontAwesomeIcon
                      className="faTrash-icon text-orange-500 hover:text-orange-700 size-4"
                      icon={faTrashCan}
                      onClick={() => { handleDelete(job?.id) }}
                    />
                  </li>
                )
              }
              )
            }
          </div>
          <div className="clear-icon absolute flex items-center bottom-4 right-16 text-orange-500 hover:text-orange-700 hover:cursor-pointer"
          onClick={handleClearCompleted}
          
          >
            <FontAwesomeIcon icon={faBroom} />

            <div>Clear Completed</div>
          </div>
        </ul>
      </div>
    </div>
  </div>
);
}
export default App;






// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faTrashCan,
//   faCircle,
// } from "@fortawesome/free-regular-svg-icons";
// import { faBroom } from "@fortawesome/free-solid-svg-icons";
// import { getJobs, addJob, deleteJob } from "./api/todoApi";
// import { TODO_STATUS } from "./constants/todo";

// function App() {
//   const [todos, setTodos] = useState<any[]>([]);
//   const [job, setJob] = useState<string>();
//   const [reloadData, setReloadData] = useState(false);

//   // call api
//   useEffect(() => {
//     getJobs().then((data: any) => {
//       setTodos(data);
//     });
//   }, [reloadData]);

//   const handleAddJob = (event: any) => {
//     event.preventDefault();
//     addJob({
//       status: TODO_STATUS.uncompleted ,
//       text: job,
//     }).then(() => {
//       setReloadData(!reloadData);
//     });
//     setJob("");
//   };

//   const handleDelete=(id:any) =>{
//     deleteJob(id)
//     setReloadData(!reloadData)
//   }

//   return (
//     <div className="mt-32 text-center flex flex-col items-center">
//       <form className="w-full max-w-lg mb-8">
//         <div className="flex">
//           <input
//             type="text"
//             id="default-search"
//             className="block w-full px-4 py-2 text-sm text-gray-900 border rounded-s-3xl bg-red-50 focus:text-black focus:outline-none focus:ring-0"
//             placeholder="What do you need to do?"
//             required
//             onChange={(event: any) => {
//               setJob(event.target.value);
//             }}
//             value={job}
//           />
//           <button
//             type="submit"
//             className="text-white end-0 bottom-0 hover:bg-blue-700 focus:outline-none font-medium rounded-e-3xl text-sm px-4 py-2 bg-blue-500"
//             onClick={(event) => {
//               handleAddJob(event);
//             }}
//           >
//             ADD
//           </button>
//         </div>
//       </form>
//       <div className="relative w-full max-w-lg list-none bg-red-50 rounded-3xl pb-20">
//         {todos.map((job) => {
//           return (
//             <li
//               key={job?.id}
//               className="flex justify-between p-3 border-wrapper relative px-8"
//             >
//               {job?.status === TODO_STATUS.uncompleted && (
//                 <div className="flex items-center">
//                   <FontAwesomeIcon
//                     className="hover:cursor-pointer pr-4 size-6 text-gray-500 hover:text-gray-700"
//                     icon={faCircle}
//                   />
//                   <span className="text-lg">{job?.text}</span>
//                 </div>
//               )}
//               {job?.status === TODO_STATUS.completed && (
//                 <div className="flex items-center">
//                   <FontAwesomeIcon
//                     className="pr-4 size-6 text-orange-500"
//                     icon={faCircleCheck}
//                   />
//                   <span className="text-lg line-through opacity-50">
//                     {job?.text}
//                   </span>
//                 </div>
//               )}
//               <FontAwesomeIcon
//                 className="hover:cursor-pointer text-orange-500 hover:text-orange-700 size-4 self-center"
//                 icon={faTrashCan}
//                 onClick={() =>{handleDelete(job?.id)}}
//               />
//             </li>
//           );
//         })}
//         <div className="absolute flex items-center bottom-4 right-16 text-orange-500 hover:text-orange-700 hover:cursor-pointer">
//           <FontAwesomeIcon icon={faBroom} />
//           <div>clear completed</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





















// import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import style from './heading.module.css'
// import './Appcss.css';
// import Appcss from 'classnames'
// import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { getJobs } from './api/todoApi';
// import { addJobs } from './api/todoApi';
// import { deleteJob } from './api/todoApi';
// import { updateJob } from './api/todoApi';
// import { TODO_STATUS } from './constants/todo';

// function App2() {

//   const [todos, setTodos] = useState<any[]>([])
//   const [job, setJob] = useState<string[]>();
//   const [reloadData, setReloadData] = useState(false)

//   //call API
//   useEffect(() => {
//     getJobs().then((data: any) => {
//       setTodos(data)
//     })
//   }, [reloadData])

//   console.log(todos)


//   const handleAddJob = (event:any) => {
//     event.preventDefault();
//     addJobs({
//       status: TODO_STATUS,
//       text:job,
//     }).then(() => {
//       setReloadData(!reloadData);
//     });
//     setJob
//     };
//   }

//   const handleDelete = (id:any) =>(
//   deleteJob(id)
 
//   return (
//     <div className="App">
//       <div className='container'>
//         <div>
//           <input
//             placeholder='What do you need to do?'
//             type="text"
//             className="text" />
//           <button>ADD</button>
//         </div>
//         <div style={{
//           border: "0px solid ",
//           borderRadius: "20px",
//           backgroundColor: "#f4e8e8", margin: "center"
//         }} >
//           <div>
//             <ul style={{
//               listStyleType: "none",
//               marginRight: 50,
//               paddingTop: 25
//             }} className="to-do-list">

//               <div>
//                 {
//                   todos.map((job => {
//                     return (
//                       <li key={job?.id} className="to-do-item">
//                         {job?.status === TODO_STATUS.uncomplate && (
//                           <div className='flex items-center'>
//                             <FontAwesomeIcon icon={faCircle} />
//                           </div>
//                         )}
//                         <div className='flex items-center'>
//                           <FontAwesomeIcon icon={faCircleCheck} /> {job.text} <FontAwesomeIcon icon={faTrash} />
//                         </div>
//                       </li>
//                     )
//                   }))
//                 }
//               </div>
//             </ul>
//           </div>
//           <button id="clear-completed-btn">Clear Complated</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App2;

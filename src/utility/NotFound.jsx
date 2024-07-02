import React from 'react'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


const NotFound = () => {
  return (
   <>
    <section className='absolute top-[50%] lg:left-[35%] grid grid-flow-row items-center text-center justify-items-center'>
        <h1 className='text-6xl opacity-[10%]'>ITEM NOT FOUND</h1>
        <ReportProblemIcon fontSize="large" sx={{fontSize: '70px', color: 'gray'}}/>
    </section>
   </>
  )
}

export default NotFound
import { TextInput,Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob= ()=>{

    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
        
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">Find your <span>dream</span> <span>job</span> with us.</div>
                <div className="text-lg text-mine-shaft-200">Good life begins with a good company. Start exploring thousands of jobs in one place.</div>
        <div className='flex gap-3 text-mine-shaft-100'>
                <TextInput className='bg-mine-shaft-800 rounded-lg p-1 px-2  [&_input]:!text-mine-shaft-100 [&_label]:!text-mine-shaft-100'  placeholder="Software Engineer" variant="unstyled" label="Job Title"/>

                <TextInput className='bg-mine-shaft-800 rounded-lg p-1 px-2  [&_input]:!text-mine-shaft-100 [&_label]:!text-mine-shaft-100' placeholder="Fulltime" variant='unstyled' label="Job Type"/>
            
            <div className='flex items-center justify-center h-full w-20 rounded-lg p-2 bg-bright-sun-400 text-mine-shaft-100  hover:bg-bright-sun-500 cursor-pointer'>
                <IconSearch className='h-[85%] w-[85%]'/>

            </div>
        </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">

                <div className="w-[80rem] relative">
                    <img src="/job_photo.png" alt=""/>
                    <div className='absolute right-20 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md'>
                        <div className='text-center text-mine-shaft-100 mb-1 text-sm'>
                            10k+ got jobs</div>
                        <Avatar.Group spacing="sm">
                        <Avatar src="/avatar.png" radius="xl" />
                        <Avatar src="/avatar2.avif" radius="xl" />
                        <Avatar src="/avatar3.avif" radius="xl" />
                        <Avatar radius="xl">+9k</Avatar>
    </Avatar.Group>
                    </div>
                    <div className='absolute left-20 w-fit top-[28%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg'>
                        <img src='./google.png' alt=''/>
                            </div>
                            <div className='text-sm text-mine-shaft-100'>
                            <div>Software Engineer</div>
                            <div className='text-mine-shaft-200 text-xs'>New York</div>

                            </div>
                        </div>
                        <div className='flex gap-2 text-mine-shaft-200 text-xs justify-around'>
                            <span> 1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DreamJob;
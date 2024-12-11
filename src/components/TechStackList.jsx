import Headings from "./Headings"


const heading = 'Full List of tools and TechStack I use'

const TechStackList = () => {
  return (
    <div className="h-screen px-2 md:px-32 mt-24">
        <h1 className="mt-5 mb-10 text-center text-4xl font-bold">
        <Headings value={heading}/>
        </h1>
        
        <div>
        <input id="check-box" type="checkbox" className="check-box"/>
            <div className="items-center px-8 md:px-32">
            <table>
            <tbody>
                <tr className="">
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Core Frontend Tools</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-1 ml-6'>React, Next.js, JavaScript, HTML, CSS and Firebase</p>
                        </td>
                </tr>
                
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>State Managers</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-1 ml-6'>Redux, Context API,</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Content Management Systems</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-1 ml-6'>Prismic.io Builder.io Strapi</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>React Ecosystem Libraries</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-1 ml-6'>Axios, SWR, React Hook Form, React Router, React-Chartjs, Tanstack Router, Tanstack Query</p>
                        </td>
                </tr>
                
            </tbody>
        </table>
     </div>

     <div className="table-extra-content items-center px-8 pr-20 md:px-32 md:pr-80">
            <table>
                <tbody>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>CSS</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-1 ml-6'>Tailwind, SASS, CSS Modules</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>UI</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-1 ml-6'>Material UI, shadcn/ui, Bootstrap, Adaptive & Responsive</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Animations</span>
                        </p>
                    </th>
                        <td >
                            <p className='text-start mb-3 px-1 ml-6'>Framer Motion</p>
                        </td>
                </tr>

                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Building Tools</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-6 '>Webpack, Vite, Rollup, Parcel, Gulp</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Quality Coding</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-6'>ESLint, Pretier, BEM, Chrome Developer Tools, React Profiler, GIT, Core Web Vitals</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Backend Frameworks</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-6'>Express.js, Django</p>
                        </td>
                </tr>
                
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Database</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-6'>MongoDB, MySQL and Postgre</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                                <span>Cloud Computing Platform</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-6'>Microsoft Azure</p>
                        </td>
                </tr>
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>Delivery and Managing Visual Contents</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-6'>Cloudinay</p>
                        </td>
                </tr>
                
                <tr>
                    <th>
                        <p className='text-start mb-3 px-1'>
                            <span>For Postman</span>
                        </p>
                    </th>
                        <td>
                            <p className='text-start mb-3 px-4 md:px-2 ml-5 md:ml-'>Jest, React Testing Library</p>
                        </td>
                </tr>
            
                </tbody>
                </table>
                <label htmlFor="check-box" className="flex justify-center cursor-pointer  ml-1"><div className='pr-1 text-3xl text-center text-[#f2c854;]'>|</div>READ LESS</label>
            </div>
            <label htmlFor="check-box" className="flex justify-center cursor-pointer ml-6 p-3"><div className='pr-1 text-3xl text-center text-[#f2c854;]'>|</div>READ MORE</label>
        </div>
        
    </div>
  )
}

export default TechStackList
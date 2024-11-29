import BackToTopButton from "./BackToTopButton"
import { EDUCATION } from "../constants/"


const Education = () => {
  return (
    <div className="h-screen px-8 md:px-32 mt-24">
        <h2 className="pb-16 pt-10 text-center text-4xl">
            Education
        </h2>

        <div>
            {EDUCATION.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                            {experience.year}
                        </p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {experience.role} - {" "}
                            <span className="text-sm text-stone-500">
                                {experience.company}
                            </span>
                        </h3>
                        <p className="mb-4 text-stone-400">{experience.description}</p>
                        
                    </div>

                </div>
            ))}
        </div>
        <BackToTopButton />
    </div>
  )
}

export default Education
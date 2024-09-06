/* eslint-disable prettier/prettier */
import { Timeline } from "./ui/timeline";
import { timelinedata } from "./ui/timelinedata";
const education = () => {
	return (
		<section className="mb-10" id="Education">
				<h1 className="mb-2 text-xl font-bold leading-snug tracking-wide text-black lg:text-2xl dark:text-white">
				My 
				<span className="text-primary"> certification, education and employment </span>
				journey 
			</h1>
			<div className="w-full">
				<Timeline data={timelinedata} />
			</div>
		</section>
  )
}

export default education;


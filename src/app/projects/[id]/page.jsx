import { projects } from "@/src/data/projects";
import DetailsPage from "@/src/components/ProjectDetails";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    return {
        title: `Sabbir | ${project?.title}`,
        description: project?.fullDescription || "Tutor profile page",
    };
};

const ProjectDetails = async ({ params }) => {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    return (
        <div>
            <DetailsPage project={project}></DetailsPage>
        </div>
    );
};
export default ProjectDetails;

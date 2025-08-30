import Avatar from "../components/Avatar";
import Container from "../components/Container";
import { teamMembers } from "../database/Team";

export default function AboutUs() {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.704321080071!2d-38.97699402570518!3d-12.200511044780827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439006386de1f%3A0xcd7a148586c71089!2sLaborat%C3%B3rio%20de%20Modelagem%20Molecular!5e0!3m2!1spt-BR!2sbr!4v1755050789554!5m2!1spt-BR!2sbr";
  return (
    <>
      <div className="flex-col w-4/5 items-center mt-4 mx-auto">
        <div className="grid grid-cols-2 gap-4 px-8 my-4 mx-auto">
          {teamMembers.map((teamMember) => (
            <Avatar key={teamMember.id} teamMember={teamMember} />
          ))}
        </div>
        <div className="px-8 my-4 mx-auto">
          <Container className={"w-full"}>
            <iframe
              src={map}
              className="w-full h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Container>
        </div>
      </div>
    </>
  );
}

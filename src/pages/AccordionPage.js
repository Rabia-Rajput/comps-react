import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "hdjvjnv",
      label: "can I use React on a Project?",
      content:
        " You can use React on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project",
    },

    {
      id: "ghdiig",
      label: "can I use js on a Project?",
      content:
        " You can use js on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project",
    },

    {
      id: "loasopid",

      label: "can I use CSS on a Project?",
      content:
        " You can use CSS on any projectYou can use React on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project You can use React on any project",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;

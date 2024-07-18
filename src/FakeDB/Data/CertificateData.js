import Programming_in_Java from "../../Assets/Certificates/Programming in Java (2).jpg";
import Data_Analytics_In_Python from "../../Assets/Certificates/Data Analytics with Python (1).jpg";
import Social_Networks from "../../Assets/Certificates/Social Networks (1) (1).pdf";

const Data = [
    {
      id: 1,
      title: 'Programming in Java',
      content: 'Java programmer with strong problem-solving skills and a solid foundation in OOP. Achieved an impressive 70.00/100.00 aggregate in Java programming. Certified by NPTEL, demonstrating expertise in Java development. Adept at tackling complex challenges and committed to excellence in software development.',
      downloadLink: Programming_in_Java, // Assuming Certificates is the correct import for your local file
    },
    {
      id: 2,
      title: 'Data Analytics with Python',
      content: "The certification attests to a comprehensive understanding of Python's application in extracting meaningful insights from datasets, enhancing analytical capabilities, and contributing to informed decisionmaking in data-driven environments.",
      downloadLink: Data_Analytics_In_Python
    },
    {
      id: 3,
      title: 'Social Networks',
      content: 'This certification underscores my proficiency in theoretical concepts and practical applications related to social structures and information dissemination. Completing this course reflects my commitment to staying informed about contemporary technological trends.',
      downloadLink: Social_Networks
    },
    // Add more certificates as needed
];

export default Data;

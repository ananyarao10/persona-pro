import {it_resp_list, sales_resp_list, swe_resp_list, marketing_resp_list, education_resp_list, scientist_resp_list, supply_chain_resp_list, healthcare_resp_list, data_analyst_resp_list, legal_resp_list, student_resp_list, ui_ux_resp_list, project_resp_list, finance_resp_list, customer_resp_list} from '../components/resp.js';
import {customer_tools_list, finance_tools_list, project_tools_list, ui_ux_tools_list, student_tools_list, legal_tools_list, data_analyst_tools_list, healthcare_tools_list, supply_chain_tools_list, scientist_tools_list, education_tools_list, marketing_tools_list, swe_tools_list, sales_tools_list, it_tools_list} from '../components/tools.js';
import {customer_communication_list, finance_communication_list, project_communication_list, ui_ux_communication_list, student_communication_list, legal_communication_list, data_analyst_communication_list, healthcare_communication_list, supply_chain_communication_list, scientist_communication_list, education_communication_list, marketing_communication_list, swe_communication_list, sales_communication_list, it_communication_list} from '../components/communication.js';
import {customer_challenges_list, finance_challenges_list, project_challenges_list, ui_ux_challenges_list, student_challenges_list, legal_challenges_list, data_analyst_challenges_list, healthcare_challenges_list, supply_chain_challenges_list, scientist_challenges_list, education_challenges_list, marketing_challenges_list, swe_challenges_list, sales_challenges_list, it_challenges_list} from '../components/challenges.js';
import {customer_support, swe_support, project_support, ui_ux_support, student_support, legal_support, data_analyst_support, healthcare_support, supply_chain_support, scientist_support, education_support, marketing_support, finance_support, sales_support, it_support} from '../components/support.js';


function matchValue(userInput, criterion) {
  const normalizedUserInput = String(userInput).toLowerCase().replace(/\s/g, '');
  
  for (const criteria of criterion) {
      const normalizedCriteria = String(criteria).toLowerCase().replace(/\s/g, '');
      if (normalizedUserInput.includes(normalizedCriteria)) {
          return criteria; 
      }
  }
  return null;
}

const assignRoles = (formData) => {
    const { department, jobTitle, responsibilities, challenges, tools, communicationStyle, supportNeeded } = formData;
  
    const roleCriteria = [
      {
        role: 'Customer Support',
        criteria: {
          department: department === 'Customer Support',
          responsibilities: matchValue(responsibilities, customer_resp_list) !== null,
          tools: matchValue(tools, customer_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, customer_communication_list) !== null,
          challenges: matchValue(challenges, customer_challenges_list) !== null,
          jobTitle: jobTitle.includes('Customer Support Representative') || jobTitle.includes('Customer Service Manager') || jobTitle.includes('Customer Success Manager'),
          supportNeeded: supportNeeded === customer_support,
        },
      },
      {
        role: 'Financial Analyst',
        criteria: {
          department: department === 'Finance',
          responsibilities: matchValue(responsibilities, finance_resp_list) !== null,
          tools: matchValue(tools, finance_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, finance_communication_list) !== null,
          challenges: matchValue(challenges, finance_challenges_list) !== null,
          jobTitle: jobTitle.includes('Financial Analyst') || jobTitle.includes('Finance Manager'),
          supportNeeded: supportNeeded === finance_support,
        },
      },
      {
        role: 'Project Manager',
        criteria: {
            responsibilities: matchValue(responsibilities, project_resp_list) !== null,
            tools: matchValue(tools, project_tools_list) !== null,
            communicationStyle: matchValue(communicationStyle, project_communication_list) !== null,
            challenges: matchValue(challenges, project_challenges_list) !== null,
            jobTitle: jobTitle.includes('Project Manager') || jobTitle.includes('Program Manager') || jobTitle.includes('Project Coordinator') || jobTitle.includes('Project Lead'),
            supportNeeded: supportNeeded === project_support,
        },
      },
      {
        role: 'UI/UX Designer',
        criteria: {
          department: department === 'Design',
          responsibilities: matchValue(responsibilities, ui_ux_resp_list) !== null,
          tools: matchValue(tools, ui_ux_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, ui_ux_communication_list) !== null,
          challenges: matchValue(challenges, ui_ux_challenges_list) !== null,
          jobTitle: jobTitle.includes('UI/UX Designer') || jobTitle.includes('User Interface Designer') || jobTitle.includes('User Experience Designer') || jobTitle.includes('UX Researcher'),
          supportNeeded: supportNeeded === ui_ux_support,
        },
      },
      {
        role: 'Student',
        criteria: {
          department: department === 'Student',
          responsibilities: matchValue(responsibilities, student_resp_list) !== null,
          tools: matchValue(tools, student_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, student_communication_list) !== null,
          challenges: matchValue(challenges, student_challenges_list) !== null,
          jobTitle: jobTitle.includes('Student') || jobTitle.includes('Intern') || jobTitle.includes('Graduate Student') || jobTitle.includes('Undergraduate Student'),
          supportNeeded: supportNeeded === student_support,
        },
      },
      {
        role: 'Legal',
        criteria: {
          department: department === 'Legal',
          responsibilities: matchValue(responsibilities, legal_resp_list) !== null,
          tools: matchValue(tools, legal_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, legal_communication_list) !== null,
          challenges: matchValue(challenges, legal_challenges_list) !== null,
          jobTitle: jobTitle.includes('Attorney') || jobTitle.includes('Lawyer') || jobTitle.includes('Legal Counsel') || jobTitle.includes('Legal Advisor') || jobTitle.includes('Paralegal'),
          supportNeeded: supportNeeded === legal_support,
        },
      },
      {
        role: 'Data Analyst',
        criteria: {
          department: department === 'Data Analytics',
          responsibilities: matchValue(responsibilities, data_analyst_resp_list) !== null,
          tools: matchValue(tools, data_analyst_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, data_analyst_communication_list) !== null,
          challenges: matchValue(challenges, data_analyst_challenges_list) !== null,
          jobTitle: jobTitle.includes('Data Analyst') || jobTitle.includes('Business Intelligence Analyst') || jobTitle.includes('Data Scientist') || jobTitle.includes('Quantitative Analyst'),
          supportNeeded: supportNeeded === data_analyst_support,
        },
      },
      {
        role: 'Healthcare',
        criteria: {
          department: department === 'Healthcare',
          responsibilities: matchValue(responsibilities, healthcare_resp_list) !== null,
          tools: matchValue(tools, healthcare_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, healthcare_communication_list) !== null,
          challenges: matchValue(challenges, healthcare_challenges_list) !== null,
          jobTitle: jobTitle.includes('Healthcare Administrator') || jobTitle.includes('Healthcare Manager') || jobTitle.includes('Medical Assistant') || jobTitle.includes('Nurse') || jobTitle.includes('Doctor'),
          supportNeeded: supportNeeded === healthcare_support,
        },
      },
      {
        role: 'Supply Chain',
        criteria: {
          department: department === 'Supply Chain',
          responsibilities: matchValue(responsibilities, supply_chain_resp_list) !== null,
          tools: matchValue(tools, supply_chain_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, supply_chain_communication_list) !== null,
          challenges: matchValue(challenges, supply_chain_challenges_list) !== null,
          jobTitle: jobTitle.includes('Supply Chain Manager') || jobTitle.includes('Logistics Coordinator') || jobTitle.includes('Procurement Specialist') || jobTitle.includes('Supply Chain Analyst'),
          supportNeeded: supportNeeded === supply_chain_support,
        },
      },
      {
        role: 'Research Scientist',
        criteria: {
          department: department === 'Scientist',
          responsibilities: matchValue(responsibilities, scientist_resp_list) !== null,
          tools: matchValue(tools, scientist_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, scientist_communication_list) !== null,
          challenges: matchValue(challenges, scientist_challenges_list) !== null,
          jobTitle: jobTitle.includes('Research Scientist') || jobTitle.includes('Laboratory Scientist') || jobTitle.includes('Biologist') || jobTitle.includes('Chemist'),
          supportNeeded: supportNeeded === scientist_support,
        },
      },
      {
        role: 'Education',
        criteria: {
          department: department === 'Education',
          responsibilities: matchValue(responsibilities, education_resp_list) !== null,
          tools: matchValue(tools, education_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, education_communication_list) !== null,
          challenges: matchValue(challenges, education_challenges_list) !== null,
          jobTitle: jobTitle.includes('Teacher') || jobTitle.includes('Professor') || jobTitle.includes('Educational Coordinator') || jobTitle.includes('Academic Advisor'),
          supportNeeded: supportNeeded === education_support,
        },
      },
      {
        role: 'Marketing',
        criteria: {
          department: department === 'Marketing',
          responsibilities: matchValue(responsibilities, marketing_resp_list) !== null,
          tools: matchValue(tools, marketing_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, marketing_communication_list) !== null,
          challenges: matchValue(challenges, marketing_challenges_list) !== null,
          jobTitle: jobTitle.includes('Marketing Manager') || jobTitle.includes('Marketing Specialist') || jobTitle.includes('Marketing Director') || jobTitle.includes('Content Marketer'),
          supportNeeded: supportNeeded === marketing_support,
        },
      },
      {
        role: 'Software Engineering',
        criteria: {
          department: department === 'Software Development',
          responsibilities: matchValue(responsibilities, swe_resp_list) !== null,
          tools: matchValue(tools, swe_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, swe_communication_list) !== null,
          challenges: matchValue(challenges, swe_challenges_list) !== null,
          jobTitle: jobTitle.includes('Software Engineer') || jobTitle.includes('Software Developer') || jobTitle.includes('Backend Developer') || jobTitle.includes('Frontend Developer') || jobTitle.includes('Full Stack Developer'),
          supportNeeded: supportNeeded === swe_support,
        },
      },
      {
        role: 'Sales',
        criteria: {
          department: department === 'Sales',
          responsibilities: matchValue(responsibilities, sales_resp_list) !== null,
          tools: matchValue(tools, sales_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, sales_communication_list) !== null,
          challenges: matchValue(challenges, sales_challenges_list) !== null,
          jobTitle: jobTitle.includes('Sales Representative') || jobTitle.includes('Sales Manager') || jobTitle.includes('Account Executive') || jobTitle.includes('Sales Director'),
          supportNeeded: supportNeeded === sales_support,
        },
      },
      {
        role: 'IT',
        criteria: {
          department: department === 'IT',
          responsibilities: matchValue(responsibilities, it_resp_list) !== null,
          tools: matchValue(tools, it_tools_list) !== null,
          communicationStyle: matchValue(communicationStyle, it_communication_list) !== null,
          challenges: matchValue(challenges, it_challenges_list) !== null,
          jobTitle: jobTitle.includes('IT Specialist') || jobTitle.includes('IT Manager') || jobTitle.includes('Systems Administrator') || jobTitle.includes('Network Engineer'),
          supportNeeded: supportNeeded === it_support,
        },
      },
    ];
  
    const roleScores = roleCriteria.map(role => {
      let score = 0;
  
      Object.keys(role.criteria).forEach(criteria => {
          if (typeof role.criteria[criteria] === 'boolean') {
              if (role.criteria[criteria] === formData[criteria]) {
                  score++;
              }
          } else if (Array.isArray(role.criteria[criteria])) {
              if (formData[criteria]) {
                  role.criteria[criteria].forEach(item => {
                      if (formData[criteria].includes(item)) {
                          score++;
                      }
                  });
              }
          } else {
              if (role.criteria[criteria] === formData[criteria]) {
                  score++;
              }
          }
      });
  
      return { role: role.role, score };
  });
  
  const sortedRoles = roleScores.sort((a, b) => b.score - a.score);
  
  return sortedRoles.slice(0, 3).map(role => role.role);
};

export { assignRoles };
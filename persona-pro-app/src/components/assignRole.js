import {it_resp_list, sales_resp_list, swe_resp_list, marketing_resp_list, education_resp_list, scientist_resp_list, supply_chain_resp_list, healthcare_resp_list, data_analyst_resp_list, legal_resp_list, student_resp_list, ui_ux_resp_list, project_resp_list, finance_resp_list, customer_resp_list} from './components/resp';
import {customer_tools_list, finance_tools_list, project_tools_list, ui_ux_tools_list, student_tools_list, legal_tools_list, data_analyst_tools_list, healthcare_tools_list, supply_chain_tools_list, scientist_tools_list, education_tools_list, marketing_tools_list, swe_tools_list, sales_tools_list, it_tools_list} from './components/tools'


function matchValue(userInput, criterion) {
    const normalizedUserInput = userInput.toLowerCase().replace(/\s/g, '');
    for (const criteria of criterion) {
        const normalizedCriteria = criteria.toLowerCase().replace(/\s/g, '');
        if (normalizedUserInput.includes(normalizedCriteria)) {
            return criteria; 
        }
    }
    return null;
}

const assignRoles = (formData) => {
    const { department, jobTitle, responsibilities, challenges, tools, communicationStyle } = formData;
  
    const roleCriteria = [
      {
        role: 'Customer Support',
        criteria: {
          department: 'Customer Support',
          responsibilities: matchValue(responsibilities, customer_resp_list) !== null,
          tools: matchValue(tools, customer_tools_list) !== null,
          communicationStyle: communicationStyle === 'Friendly' || communicationStyle === 'Direct',
        },
      },
      {
        role: 'Financial Analyst',
        criteria: {
          department: 'Finance',
          responsibilities: matchValue(responsibilities, finance_resp_list) !== null,
          tools: matchValue(tools, finance_tools_list) !== null,
          jobTitle: jobTitle.includes('Financial Analyst') || jobTitle.includes('Finance Manager'),
        },
      },
      {
        role: 'Project Manager',
        criteria: {
            responsibilities: matchValue(responsibilities, project_resp_list) !== null,
            tools: matchValue(tools, project_tools_list) !== null,
            jobTitle: jobTitle.includes('Project Manager') || jobTitle.includes('Project Lead'),
        },
      },
      {
        role: 'UI/UX Designer',
        criteria: {
          department: 'Design',
          responsibilities: matchValue(responsibilities, ui_ux_resp_list) !== null,
          tools: matchValue(tools, ui_ux_tools_list) !== null,
          jobTitle: jobTitle.includes('UI/UX Designer') || jobTitle.includes('Graphic Designer'),
        },
      },
      {
        role: 'Student',
        criteria: {
          department: 'Student',
          responsibilities: matchValue(responsibilities, student_resp_list) !== null,
          tools: matchValue(tools, student_tools_list) !== null,
          jobTitle: jobTitle.includes('Operations Manager') || jobTitle.includes('Operations Lead'),
        },
      },
      {
        role: 'Legal',
        criteria: {
          department: 'Legal',
          responsibilities: matchValue(responsibilities, legal_resp_list) !== null,
          tools: matchValue(tools, legal_tools_list) !== null,
          jobTitle: jobTitle.includes('Legal Counsel') || jobTitle.includes('Legal Advisor'),
        },
      },
      {
        role: 'Data Analyst',
        criteria: {
          department: 'Data Analytics',
          responsibilities: matchValue(responsibilities, data_analyst_resp_list) !== null,
          tools: matchValue(tools, data_analyst_tools_list) !== null,
          jobTitle: jobTitle.includes('Data Analyst') || jobTitle.includes('Business Analyst'),
        },
      },
      {
        role: 'Healthcare',
        criteria: {
          department: 'Healthcare',
          responsibilities: matchValue(responsibilities, healthcare_resp_list) !== null,
          tools: matchValue(tools, healthcare_tools_list) !== null,
          jobTitle: jobTitle.includes('Healthcare Administrator') || jobTitle.includes('Hospital Administrator'),
        },
      },
      {
        role: 'Supply Chain',
        criteria: {
          department: 'Supply Chain',
          responsibilities: matchValue(responsibilities, supply_chain_resp_list) !== null,
          tools: matchValue(tools, supply_chain_tools_list) !== null,
          jobTitle: jobTitle.includes('Supply Chain Manager') || jobTitle.includes('Logistics Manager'),
        },
      },
      {
        role: 'Research Scientist',
        criteria: {
          department: 'Research',
          responsibilities: matchValue(responsibilities, scientist_resp_list) !== null,
          tools: matchValue(tools, scientist_tools_list) !== null,
          jobTitle: jobTitle.includes('Research Scientist') || jobTitle.includes('Research Associate'),
        },
      },
      {
        role: 'Education',
        criteria: {
          department: 'Education',
          responsibilities: matchValue(responsibilities, education_resp_list) !== null,
          tools: matchValue(tools, education_tools_list) !== null,
          jobTitle: jobTitle.includes('Educational Coordinator') || jobTitle.includes('Training Manager'),
        },
      },
      {
        role: 'Marketing',
        criteria: {
          department: 'Marketing',
          responsibilities: matchValue(responsibilities, marketing_resp_list) !== null,
          tools: matchValue(tools, marketing_tools_list) !== null,
          jobTitle: jobTitle.includes('Digital Marketing Specialist') || jobTitle.includes('Marketing Manager'),
          responsibilities: responsibilities.includes('digital marketing'),
        },
      },
      {
        role: 'Software Engineering',
        criteria: {
          department: 'Software Development',
          responsibilities: matchValue(responsibilities, swe_resp_list) !== null,
          tools: matchValue(tools, swe_tools_list) !== null,
          jobTitle: jobTitle.includes('Environmental Scientist') || jobTitle.includes('Conservation Specialist'),
        },
      },
      {
        role: 'Sales',
        criteria: {
          department: 'Sales Operations',
          responsibilities: matchValue(responsibilities, sales_resp_list) !== null,
          tools: matchValue(tools, sales_tools_list) !== null,
          jobTitle: jobTitle.includes('Sales Operations Analyst') || jobTitle.includes('Sales Analyst'),
          responsibilities: responsibilities.includes('sales data analysis'),
        },
      },
      {
        role: 'IT',
        criteria: {
          department: 'Technical Support',
          responsibilities: matchValue(responsibilities, it_resp_list) !== null,
          tools: matchValue(tools, it_tools_list) !== null,
          jobTitle: jobTitle.includes('Technical Support Engineer') || jobTitle.includes('IT Support Specialist'),
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
        role.criteria[criteria].forEach(item => {
          if (formData[criteria].includes(item)) {
            score++;
          }
        });
      } else {
        if (role.criteria[criteria] === formData[criteria]) {
          score++;
        }
      }
    });
    return { role: role.role, score };
  });

  // Sort roles by score in descending order
  const sortedRoles = roleScores.sort((a, b) => b.score - a.score);

  // Return top 3 roles
  return sortedRoles.slice(0, 3).map(role => role.role);
};
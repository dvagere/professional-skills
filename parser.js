const fs = require('fs');
const data = require('./skills.json')

const skills = data.skills;

console.log("Original data Length: ", skills.length)

const filteredData = skills.reduce((acc, current) => {
  const x = acc.find(item => item.id === current.id);
  if(!x) {
    return acc.concat([
      {
        id: current.id,
        skill_name: current.skill_name,
        category_id: current.parent_id,
        category_name: current.parent_name
      }
    ]);
  }
  return acc;
}, []);

console.log("New data length: ", filteredData.length);

const finalDataMap = {
  "skills": filteredData
};

const finalData = JSON.stringify(finalDataMap, null, 4);

fs.writeFile('manipulated_skills.json', finalData, (err) => {
  if(err) {
    throw err;
  }
  console.log("JSON data is saved");
});
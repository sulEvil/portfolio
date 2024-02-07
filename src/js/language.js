let languages = {
   en: {

   },
   ru: {
     "headerMain": 'Главная',
     "headerProjects": 'Проекты',
     "headerSkills": 'Навыки',

     "mainTitle": 'Портфолио',
     "mainName": 'Султан Галимов',
     "mainText": `Привет! Я рад приветствовать вас на моем сайте-портфолио! <br>
     Я JavaScript программист с опытом работы в области <br>
     разработки веб-приложений, специализирующийся на React.  <br>
     Здесь вы найдете информацию о моих проектах, навыках и опыте работы.
      `,
   },
}
let setLanguage = (language) => {
   Object.entries(languages[language]).forEach((item) => {
      document.querySelector(`[key="${item[0]}"]`).innerHTML = item[1]
   })
}




export {setLanguage};
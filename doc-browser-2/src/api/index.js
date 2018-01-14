import axios from 'axios'

export default {
  getProjects: function () {
    return axios.get('./static/data/projects.json')
      .then(response => {
        return response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  getProject: function (id) {
    return axios.get('./static/data/' + id + '/project-data.json')
    .then(response => {
      return response.data
    })
    .catch(e => {
      console.log(e)
    })
  }
}

// returns the list of projects

/*
module.exports.getProjectDetails = function(projectId) {
  console.log('-> getProjectDetails')
  return []
}
*/

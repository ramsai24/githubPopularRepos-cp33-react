import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {githubRepoApiUrl: languageFiltersData[1].id, githubRepoData: []}

  componentDidMount() {
    this.getGithubList()
  }

  languageIdUpdate = id => {
    console.log(id)
    this.setState({githubRepoApiUrl: id}, this.getGithubList)
  }

  getGithubList = async () => {
    const {githubRepoApiUrl} = this.state
    console.log(githubRepoApiUrl)
    const url = `https://apis.ccbp.in/popular-repos?language=${githubRepoApiUrl}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="app-container">
        <h1>Popular</h1>
        <ul className="language-item-container">
          {languageFiltersData.map(languageItem => (
            <LanguageFilterItem
              languagefilterItem={languageItem}
              languageIdUpdate={this.languageIdUpdate}
              key={languageItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos

// Write your code here

import './index.css'

const RepoistoryItem = props => {
  const {repoItem} = props
  console.log(repoItem)
  const {avatarUrl, name, forksCount, issuesCount, starsCount} = repoItem

  return (
    <li>
      <img src={avatarUrl} alt={name} />
      <div className="icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount}</p>
      </div>
      <div className="icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}</p>
      </div>
      <div className="icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepoistoryItem

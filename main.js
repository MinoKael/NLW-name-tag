const userLinks = {
  github: 'minokael',
  linkedin: 'in/mikael-santana-1a5961223',
  facebook: 'minokael',
  instagram: 'minokael',
  twitter: 'minokael'
}

function changeUserLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userLinks[social]}`
  }
}
changeUserLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${userLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userLogin.textContent = data.login
      userAvatar.src = data.avatar_url
      webTitle.textContent = `${data.name} - DoWhile 2021`
    })
}

getGitHubProfilesInfos()

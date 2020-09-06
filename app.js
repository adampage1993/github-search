// Initialise Github
const github = new GitHub();
// Inititialise UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert with UI JS
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile with UI JS
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile with UI JS
    ui.clearProfile();
  }
});
